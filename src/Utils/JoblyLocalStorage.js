class JoblyLocalStorage {
    static saveToken(token) {
        window.localStorage.setItem('_token', token);
    }

    static loadToken() {
        return window.localStorage.getItem('_token' || null);
    }
}

export default JoblyLocalStorage;