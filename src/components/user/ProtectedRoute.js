import React from 'react';
import { Navigate } from "react-router-dom";
import Preloader from '../movies/common/Preloader';

export default function ProtectedRoute({ element: Component, ...props }) {
    return (
        !props.isPageLoading ?
            props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace />
            :
            <Preloader />
    )
}