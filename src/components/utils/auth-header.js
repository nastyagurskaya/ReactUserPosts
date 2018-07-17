import cookie from 'react-cookies'
export function authHeader() {
    // return authorization header with jwt token
    //let auth_token = JSON.parse(localStorage.getItem('auth_token'));

    let auth = JSON.parse(cookie.load('authorized'));
    //console.log(auth);

    if (auth) {
        let auth_token = JSON.parse(cookie.load('auth_token'));
        return { 'Authorization': 'Bearer ' + auth_token,
        "Content-type": "application/json; charset=UTF-8" };
    } else {
        return {};
    }
}