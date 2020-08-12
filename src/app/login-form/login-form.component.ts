import { Component, OnInit } from '@angular/core';
import { AuthMgrService } from '../auth-mgr.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loggedInUser;
  isLoggedIn;

  constructor(private authMgr: AuthMgrService) { }

  ngOnInit(): void {
    this.authMgr.authService.authState.subscribe( (usr) => {
        this.isLoggedIn = (usr != null);
        this.loggedInUser = usr;
    })
  }

  signWithGoogle() {
    this.authMgr.signInWithGoogle();
  }

}
