import { Component, OnInit } from '@angular/core';
import { AuthMgrService } from '../auth-mgr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loggedInUser;
  isLoggedIn;

  constructor(private authMgr: AuthMgrService, private rtr: Router) { }

  ngOnInit(): void {
  }

  signWithGoogle() {
    this.authMgr.signInWithGoogle();
    this.rtr.navigateByUrl("/");
  }

}
