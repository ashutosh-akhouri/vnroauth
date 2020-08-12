import { Injectable } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class AuthMgrService {

  loggedInUser;

  constructor(public authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((usr) => { this.loggedInUser = usr; console.log(JSON.stringify(usr))});
  }

  signOut(): void {
    this.authService.signOut();
  }

}
