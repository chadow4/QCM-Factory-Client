import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AlertService} from "../../services/alert.service";
import {Router} from "@angular/router";
import {UserCreateDto} from "../../models/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = {firstname: '', lastname: '', email: '', password: ''};

  constructor(private authService: AuthService,
              private alertService: AlertService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const userRegister = this.registerForm as UserCreateDto;
    this.authService.register(userRegister).subscribe({
      next: (res) => {
        this.router.navigate(['login']).then(
          () => this.alertService.success(res.message));
      },
      error: err => this.alertService.error(err.error.message)
    });

  }

}
