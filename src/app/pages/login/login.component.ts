import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AlertService} from "../../services/alert.service";
import {Router} from "@angular/router";
import {UserLoginDto} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = {email: '', password: ''};

  constructor(private authService: AuthService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const userLogin = this.loginForm as UserLoginDto;
    this.authService.login(userLogin).subscribe({
      next: (res) => {
        this.router.navigate(['/']).then(
          () => this.alertService.success("Vous êtes maintenant connecté"));
      },
      error: err => this.alertService.error(err.error.message)
    });

  }
}
