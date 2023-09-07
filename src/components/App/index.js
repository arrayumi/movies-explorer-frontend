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
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

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

    const [isEditMode, setIsEditMode] = useState(false);


    function checkToken() {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            Promise.all([
                mainApi.getUserInfo(),
                moviesApi.getMovies(),
            ])
                .then(([userData, movies]) => {
                    setCurrentUser(userData);
                    setSavedMovies(movies);
                    navigate('/movies', { replace: true });
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
                localStorage.removeItem('_id');
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                setCurrentUser({});
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Routes>
                    <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
                    <Route path="/signin" element={<Login handleLogin={handleLogin}
                        isSuccess={isSuccess}
                        setIsSuccess={setIsSuccess} />} />
                    <Route path="/signup" element={<Register handleRegister={handleRegister}
                        isSuccess={isSuccess}
                        setIsSuccess={setIsSuccess} />} />

                    <Route path="/movies" element={<ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />} />
                    <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
                    } />
                    <Route path="/profile" element={<ProtectedRoute element={Profile}
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