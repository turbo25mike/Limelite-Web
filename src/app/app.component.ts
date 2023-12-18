import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pageTitle = '';
  showMenu = false;

  constructor(public auth: AuthService, public router: Router) {
    this.router.events.subscribe((event) => { 
      if(event instanceof NavigationEnd && event.url.length > 1)
        this.pageTitle = " | " + event.url.substring(1);
    });
  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
