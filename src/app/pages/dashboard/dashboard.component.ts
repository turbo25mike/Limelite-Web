import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public auth: AuthService) {}
  title = 'limelite';
  hideMenu = true;

  logout(){
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

}
