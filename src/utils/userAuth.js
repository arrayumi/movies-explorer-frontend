const BASE_URL = 'https://api.arrayumi.nomoreparties.co';

function checkRes(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ name, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => {checkRes(res)});
};

export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => checkRes(res));
};

export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
        credentials: 'include',
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(res => checkRes(res));
}