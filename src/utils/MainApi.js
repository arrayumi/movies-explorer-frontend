class MainApi {

    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkRes(res) {
        if (res.ok) return res.json();
        return Promise.reject((new Error(`Ошибка ${res.status}`)));
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            credentials: 'include',
            headers: this._headers,
        })
            .then(res => this._checkRes(res))
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            credentials: 'include',
            headers: this._headers,
        })
            .then(res => this._checkRes(res))
    }

    setUserInfo({ name, email }) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({ name, email }),
        })
            .then((res) => this._checkRes(res));
    }

    saveMovie(movie) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify(movie),
        })
            .then(res => this._checkRes(res))
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            credentials: 'include',
            headers: this._headers,
        })
            .then(res => this._checkRes(res))
    }


}

const mainApi = new MainApi({
    url: 'https://api.arrayumi.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default mainApi;