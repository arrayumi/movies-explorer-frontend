import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
                });
        }
    }

    useEffect(() => {
        checkToken();
    }, [])


    function handleRegister({ name, email, password }) {
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
            });
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
            });
    }

    function handleEditProfile(userInfo) {
        mainApi.setUserInfo(userInfo)
            .then((newInfo) => {
                setCurrentUser(newInfo);
                setIsSuccess({ success: true, msg: "" });
                setIsEditMode(false);
            })
            .catch(err => {
                console.log(err);
                setIsSuccess({ success: false, msg: err.message });
            });
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
            .catch(console.log);
    }

    console.log(savedMovies)


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
                            setIsSuccess={setIsSuccess} />} />
                    <Route path="/signup" element=
                        {<AnonymousRoute element={Register}
                            isLoggedIn={isLoggedIn}
                            handleRegister={handleRegister}
                            isSuccess={isSuccess}
                            setIsSuccess={setIsSuccess} />} />

                    <Route path="/movies" element=
                        {<ProtectedRoute element={Movies}
                            isLoggedIn={isLoggedIn}
                            handleSaveMovie={handleSaveMovie}
                            handleDeleteMovie={handleDeleteMovie}
                            movies={movies}
                            setMovies={setMovies}
                            savedMovieCheck={savedMovieCheck} />} />
                    <Route path="/saved-movies" element=
                        {<ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
                        } />
                    <Route path="/profile" element=
                        {<ProtectedRoute element={Profile}
                            isLoggedIn={isLoggedIn}
                            handleEditProfile={handleEditProfile}
                            isSuccess={isSuccess}
                            isEditMode={isEditMode}
                            setIsEditMode={setIsEditMode}
                            handleLogout={handleLogout}
                        />} />

                    <Route path="*" element={<Page404 />} />
                </Routes>
                <NavPopup isLoggedIn={isLoggedIn} />
            </CurrentUserContext.Provider>
        </div>
    )
}

export default App;