import { config } from '../utils/config';
import {authHeader } from '../utils/auth-header';

export const userPostService = {
    //login,
   // logout,
   // register,
    getPosts,
    updatePost,
    getPostbyId,
    createPost,
    deletePost,
    getSharedPosts
   // getById,
    //update,
    //delete: _delete
};

// function login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//     };

//     return fetch(config.apiUrl + '/auth/login', requestOptions)
//         .then(handleResponse, handleError)
//         .then(resp => {
//             // login successful if there's a jwt token in the response
//             if (resp.auth_token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('auth_token', JSON.stringify(resp.auth_token));
//             }

//             return user;
//         }
//     );
// }

// function logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

function getPosts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/posts', requestOptions).then(response => response.json());
}
function getSharedPosts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/posts/shared', requestOptions).then(response => response.json());
}
function getPostbyId(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(config.apiUrl+'/posts/'+id, requestOptions).then(response => response.json());
}
function updatePost(id, title, body, color) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
          id: id,
          title: title,
          body: body,
          color: color
          })
    };
    return fetch(config.apiUrl+'/posts/update', requestOptions);
}
function createPost(title, body, color) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            title: title,
            body: body,
            color: color
          })
    };
     return fetch(config.apiUrl+'/posts/create', requestOptions);
}
function deletePost(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/posts/'+id , requestOptions)
}

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(config.apiUrl + '/users/register', requestOptions).then(handleResponse, handleError);
// }



// function handleResponse(response) {
//     return new Promise((resolve, reject) => {
//         if (response.ok) {
//             // return json if it was returned in the response
//             var contentType = response.headers.get("content-type");
//             if (contentType && contentType.includes("application/json")) {
//                 response.json().then(json => resolve(json));
//             } else {
//                 resolve();
//             }
//         } else {
//             // return error message from response body
//             response.text().then(text => reject(text));
//         }
//     });
// }

// function handleError(error) {
//     return Promise.reject(error && error.message);
// }