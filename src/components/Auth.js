import React, { Component } from 'react';

export default class Auth {
    // Please use your own credentials here
    auth = {
        isAuthenticated: false
    }
  
    login = () => {
        console.log("Loged in");
      this.auth.isAuthenticated = true;

    }
  
    // parses the result after authentication from URL hash
    handleAuthentication = () => {
    //   this.auth0.parseHash((err, authResult) => {
    //     if (authResult && authResult.accessToken && authResult.idToken) {
    //       this.setSession(authResult);
    //       history.replace('/home');
    //     } else if (err) {
    //       history.replace('/home');
    //       console.log(err);
    //     }
    //   });
    }
  
    // Sets user details in localStorage
    setSession = (authResult) => {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);;
      localStorage.setItem('expires_at', expiresAt);
    }
  
    // removes user details from localStorage
    logout = () => {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_at');
    }
  
    // checks if the user is authenticated
    isAuthenticated = () => {
      // Check whether the current time is past the
      // access token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
  }