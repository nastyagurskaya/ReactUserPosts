import { config } from '../utils/config';
import {authHeader } from '../utils/auth-header';

export const userPostService = {
    login,
    logout,
    registrate,
    getPosts,
    updatePost,
    getPostbyId,
    createPost,
    deletePost,
    getSharedPosts,
    getUserDetails,
    getUsers,
    sharePost,
    getCheckPosts,
    getCheckItems,
    deleteChekedPost,
    handleError,
    createCheckPost,
    getCheckPostbyId,
    updateCheckPost,
    createCheckItem,
    updateCheckItem,
    getCheckItemsbyPost,
    deleteChekedItem
};
var login = false;
function logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('authorized');
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            username: username,
            password: password
          })
    };
    return fetch(config.apiUrl+'/auth/login', requestOptions).then(response => response.json(),handleError)
    .then(response => {
        if (response.auth_token) {
            localStorage.setItem('auth_token', JSON.stringify(response.auth_token));
            localStorage.setItem('authorized', 'true');         
        }
    })
}
function registrate(user){
    const requestOptions = {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(user)
    };
    return fetch(config.apiUrl+'/accounts', requestOptions).then(resp => {console.log(resp)})
}
function getPosts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/posts', requestOptions).then(response => response.json());
}
function getUsers()
{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/users', requestOptions).then(response => response.json());
}
function getCheckPosts()
{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/checkposts', requestOptions).then(response => response.json());
}
function getCheckItems()
{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/checkposts/checkitems', requestOptions).then(response => response.json());
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
function getCheckPostbyId(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(config.apiUrl+'/checkposts/'+id, requestOptions).then(response => response.json());
}
function getCheckItemsbyPost(idPost) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(config.apiUrl+'/checkposts/checkitems/'+idPost, requestOptions).then(response => response.json());
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
function updateCheckPost(id, title, color) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
          id: id,
          title: title,
          color: color
          })
    };
    return fetch(config.apiUrl+'/checkposts/update', requestOptions);
}
function updateCheckItem(item) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(item)
    };
    return fetch(config.apiUrl+'/checkposts/checklistitem/update', requestOptions).then(res =>{
        console.log(res);
    });
}
function getUserDetails()
{
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(config.apiUrl+'/users/home',requestOptions);
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
function createCheckPost(title, color) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            title: title,
            color: color
          })
    };
     return fetch(config.apiUrl+'/checkposts/create', requestOptions).then(response => response.json());
}
function createCheckItem(item) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(item)
    };
     return fetch(config.apiUrl+'/checkposts/checklistitem/create', requestOptions).then(response => response.json());
}
function deletePost(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/posts/'+id , requestOptions);
}
function deleteChekedPost(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/checkposts/'+id , requestOptions);
}
function deleteChekedItem(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(config.apiUrl + '/checkposts/checklistitem/'+id , requestOptions);
}
function sharePost(UserId, PostId) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            UserId: UserId,
            PostId: PostId
        })
    };
    return fetch(config.apiUrl + "/posts/shared/create", requestOptions);
}

function handleError(error) {
    return Promise.reject(error && error.message);
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
