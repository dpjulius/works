import { Injectable } from '@angular/core';
import { User } from '../dataobject/user';

@Injectable()
export class AuthenticationService {

  constructor() { }

  authenticate(user: User)  {
    console.log("Authenticating the user..." + user);
    if (user == null || user.username != 'Julius' || user.password != 'password') {
        console.log("Invalid User!!!");
        throw new Error("Invalid Username and/or Password. Please try again.");
    }
    console.log("Authentication is successful. Valid User!!!");
    user.password = null;
    user.authenticated = true;
    localStorage.setItem('user', JSON.stringify(user));
  }

}
