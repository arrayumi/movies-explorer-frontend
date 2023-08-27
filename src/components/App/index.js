import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './index.css';
import Main from '../Main';

function App() {
    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<Register />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<SavedMovies />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </div>
    )
}

export default App;