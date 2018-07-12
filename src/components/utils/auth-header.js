export function authHeader() {
    // return authorization header with jwt token
    let auth_token = JSON.parse(localStorage.getItem('auth_token'));
    
    if (auth_token) {
  
        return { 'Authorization': 'Bearer ' + auth_token,
        "Content-type": "application/json; charset=UTF-8" };
    } else {
        return {};
    }
}