function request(url, method, parseResponse, data) {
    return fetch(url, {
            method: method,
            headers: new Headers({
                "Content-Type": "application/json;charset=UTF-8"
            }),
            body: data ? JSON.stringify(data) : undefined
        }).then(response => parseResponse ? response.json() : response);
}

export default {
    get(url) {
        return request(url, 'GET', true);
    },

    post(url, data) {
        return request(url, 'POST', true, data);
    },

    put(url, data) {
        return request(url, 'PUT', true, data);
    },

    deleteHttp(url) {
        return request(url, 'DELETE');
    }
}