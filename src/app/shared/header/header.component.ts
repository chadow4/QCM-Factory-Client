import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  isProf: boolean = false;

  constructor(private authService: AuthService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.authService.authStateChanged.subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
      if (this.loggedIn) {
        this.isProf = this.authService.isProf();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.alertService.success("Vous êtes maintenant déconnecté !");
  }
}
