import React, { useState } from 'react';
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

function App() {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleRegister({ name, email, password }) {
        auth.register({ name, email, password })
            .then((res) => {
                handleLogin({email, password})
                // handleInfoTooltipOpen();
                // handleInfoMessage(true);
            }
            )
            .catch((err) => {
                console.log(err);
                // handleInfoTooltipOpen();
                // handleInfoMessage(false);
            });
    }

    function handleLoginState() {
        setIsLoggedIn(true);
        // auth.getContent()
        //     .then((data) => {
        //         setEmail(data.email);
        //     })
        //     .catch(err => console.log(err));
    }

    function handleLogin({ email, password }) {
        auth.authorize({ email, password })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    handleLoginState();
                    navigate('/movies', { replace: true });
                }
            }
            )
            .catch((err) => {
                console.log(err);
                // handleInfoTooltipOpen();
                // handleInfoMessage(false);
            });
    }

    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
                <Route path="/signup" element={<Register handleRegister={handleRegister} />} />

                <Route path="/movies" element={<ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />} />
                <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />} />
                <Route path="/profile" element={<ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
            <NavPopup />
        </div>
    )
}

export default App;