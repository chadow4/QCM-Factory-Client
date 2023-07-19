import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {UserDto} from "../../../models/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  myInfos!: UserDto;

  constructor(private alertService: AlertService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getMyInfo().subscribe(res => {
      this.myInfos = res;
    });
  }

}
