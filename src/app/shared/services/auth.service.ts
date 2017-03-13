import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Subject, Observable} from 'rxjs/Rx'
import { User } from './user.interface';

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) { }

  signupUser(user: User ) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log('Error, cannot sign up ', error);
    });
  }

  loginUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log('Error Cannot Sign In User', error );
    });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['homepage'])
  }

  isAuthenticated(): Observable<boolean> {
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        subject.next(true);
        // User is signed in.
      } else {
        subject.next(false);
        // No user is signed in.
      }
    });
    return subject.asObservable()
  }

}
