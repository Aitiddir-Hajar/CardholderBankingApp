import { Injectable,NgZone  } from '@angular/core';
import { User } from "./user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  user: any;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
      }
    });

   }


   SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }


  //sign up function
  SignUp(email:string, password:string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }


  //Verification Mail to user
  SendVerificationMail() {
    return this.afAuth.currentUser.then((user: any) => {
      return user.sendEmailVerification();
    }).then(() => {
      this.router.navigate(['verify-email-address']);
    });
  }   

  //Reset Password Function
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error);
    });
  }


  //check user login
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')  || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  //set full user data we get
   SetUserData(user: any) {
    const userRef: AngularFirestoreDocument = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out function
  SignOut() {

    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
    
  }
}
