import { Component, OnInit } from '@angular/core';
import { AuthMgrService } from '../auth-mgr.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: SocialUser;

  constructor(private authMgr: AuthMgrService) { }

  ngOnInit(): void {
    this.authMgr.authService.authState.subscribe( (usr) => {
      this.isLoggedIn = (usr != null);
      this.loggedInUser = usr;
  })

  }

}
