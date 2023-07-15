import {Component, OnInit} from '@angular/core';
import {UserJwtSessionDto} from "../../models/user.model";
import {AuthService} from "../../services/auth.service";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mysession!: UserJwtSessionDto;
  constructor() {
  }

  ngOnInit() {
  }
}
