import axios from 'axios';

export function fetch(username, password) {
    return axios.post('/auth/password/', {
        username: username,
        password: password,
    })
    .then(function(response) {
        return { status: 0, data: response.data };
    })
    .catch(function(error) {
        console.log(error);
        return { status: 1, message: error.response.data.message };
    });
}