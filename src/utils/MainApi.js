class MainApi {

    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _checkRes(res) {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка ${res.status}: ${res.message}`);
    }

    getSavedMovies() {
        return fetch(`${this._url}`, {
            credentials: 'include',
            headers: this._headers,
        })
            .then(res => this._checkRes(res))
    }
}

const mainApi = new MainApi({
    url: 'https://api.arrayumi.nomoreparties.co/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default mainApi;