import React from 'react';
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

function App() {

    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <NavPopup />
        </div>
    )
}

export default App;