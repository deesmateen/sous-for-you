import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnDestroy, OnInit {

  isAuthenticated = false;
  private subscription: Subscription;

  constructor(
    private auth: AuthService
  ) {
    this.subscription =  this.auth.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  ngOnInit() {
  }

  isAuth() {
    return this.isAuthenticated;
  }

  onLogOut() {
    this.auth.logout();
  }

  ngOnDestroy() {

  }

}
