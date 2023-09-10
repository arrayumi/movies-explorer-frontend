import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import Main from '../Main';
import Movies from '../movies/Movies';
import SavedMovies from '../movies/SavedMovies';
import Profile from '../user/Profile';
import Page404 from '../Page404';
import Login from '../user/Login';
import Register from '../user/Register';
import NavPopup from '../common/NavPopup';

import * as auth from '../../utils/userAuth';
import ProtectedRoute from '../user/ProtectedRoute';
import AnonymousRoute from '../user/AnonymousRoute';

import mainApi from '../../utils/MainApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isSuccess, setIsSuccess] = useState({
        success: true,
        msg: ""
    });

    const [currentUser, setCurrentUser] = useState({});

    const [savedMovies, setSavedMovies] = useState([]);
    const [movies, setMovies] = useState([]);

    const [isEditMode, setIsEditMode] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true);

    const [sendingData, setSendingData] = useState(false);

    function savedMovieCheck(movie) {
        return savedMovies.some((item) => item.movieId === movie.id);
    }


    function checkToken() {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            mainApi.getUserInfo()
                .then((userData) => {
                    setCurrentUser(userData);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => setIsPageLoading(false))
        }
    }

    useEffect(() => {
        checkToken();
        mainApi.getSavedMovies()
            .then(movies => {
                setSavedMovies(movies);
            })
            .catch(err => console.log(err))
    }, [])



    function handleRegister({ name, email, password }) {
        setSendingData(true);
        auth.register({ name, email, password })
            .then((res) => {
                if (res) {
                    localStorage.setItem('_id', res._id);
                    handleLogin({ email, password })
                    setIsSuccess({ success: true, msg: "" });
                }
            }
            )
            .catch((err) => {
                console.log(err.message);
                setIsSuccess({ success: false, msg: err.message });
            })
            .finally(() => setSendingData(false));
    }

    function handleLoginState() {
        setIsLoggedIn(true);
        auth.getContent()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch(err => console.log(err));
    }

    function handleLogin({ email, password }) {
        setIsPageLoading(true);
        setSendingData(true);
        auth.authorize({ email, password })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    handleLoginState();
                    navigate('/movies', { replace: true });
                    setIsSuccess({ success: true, msg: "" });
                }
            }
            )
            .catch((err) => {
                console.log(err.message);
                setIsSuccess({ success: false, msg: err.message });
            })
            .finally(() => {
                setIsPageLoading(false);
                setSendingData(false);
            })
    }

    function handleEditProfile(userInfo) {
        setSendingData(true);
        mainApi.setUserInfo(userInfo)
            .then((newInfo) => {
                setCurrentUser(newInfo);
                setIsSuccess({ success: true, msg: "Профиль успешно отредактирован" });
                setIsEditMode(false);
            })
            .catch(err => {
                console.log(err);
                setIsSuccess({ success: false, msg: err.message });
            })
            .finally(() => setSendingData(false));
    }


    function handleLogout() {
        auth.logout()
            .then(() => {
                localStorage.clear();
                setIsLoggedIn(false);
                setCurrentUser({});
            })
            .catch(err => console.log(err));
    }

    function handleSaveMovie(movie) {
        mainApi.saveMovie({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
            owner: movie.owner,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN
        })
            .then((movie) => {
                setSavedMovies([movie, ...savedMovies]);
            })
            .catch(console.log);
    }

    function handleDeleteMovie(movie) {
        const savedMovie = savedMovies.find(
            (item) => item.id === movie.movieId || item.movieId === movie.movieId
        );
        mainApi.deleteMovie(savedMovie._id)
            .then(() => {
                const newList = savedMovies.filter((item) => {
                    if (item.movieId === movie.id || item.movieId === movie.movieId) {
                        return false;
                    } else {
                        return true;
                    }
                })
                setSavedMovies(newList);
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Routes>
                    <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
                    <Route path="/signin" element=
                        {<AnonymousRoute element={Login}
                            isLoggedIn={isLoggedIn}
                            handleLogin={handleLogin}
                            isSuccess={isSuccess}
                            setIsSuccess={setIsSuccess}
                            sendingData={sendingData} />} />
                    <Route path="/signup" element=
                        {<AnonymousRoute element={Register}
                            isLoggedIn={isLoggedIn}
                            handleRegister={handleRegister}
                            isSuccess={isSuccess}
                            setIsSuccess={setIsSuccess}
                            sendingData={sendingData} />} />

                    <Route path="/movies" element=
                        {<ProtectedRoute isPageLoading={isPageLoading}
                            element={Movies}
                            isLoggedIn={isLoggedIn}
                            handleSaveMovie={handleSaveMovie}
                            handleDeleteMovie={handleDeleteMovie}
                            movies={movies}
                            setMovies={setMovies}
                            savedMovieCheck={savedMovieCheck} 
                            sendingData={sendingData}
                            setSendingData={setSendingData}/>} />
                    <Route path="/saved-movies" element=
                        {<ProtectedRoute isPageLoading={isPageLoading} element={SavedMovies}
                            isLoggedIn={isLoggedIn}
                            handleDeleteMovie={handleDeleteMovie}
                            savedMovies={savedMovies}
                            sendingData={sendingData}
                            setSendingData={setSendingData} />
                        } />
                    <Route path="/profile" element=
                        {<ProtectedRoute isPageLoading={isPageLoading} element={Profile}
                            isLoggedIn={isLoggedIn}
                            handleEditProfile={handleEditProfile}
                            isSuccess={isSuccess}
                            setIsSuccess={setIsSuccess}
                            isEditMode={isEditMode}
                            setIsEditMode={setIsEditMode}
                            handleLogout={handleLogout}
                            sendingData={sendingData}
                        />} />

                    <Route path="*" element={<Page404 />} />
                </Routes>
                <NavPopup isLoggedIn={isLoggedIn} />
            </CurrentUserContext.Provider>
        </div>
    )
}

export default App;