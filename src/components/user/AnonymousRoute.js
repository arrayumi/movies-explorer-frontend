import React from 'react';
import { Navigate } from "react-router-dom";

export default function AnonymousRoute({element: Component, ...props}) {
    return (
        !props.isLoggedIn ? <Component {...props} /> : <Navigate to="/movies" replace/>
    )
}