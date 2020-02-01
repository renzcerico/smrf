import { UserService } from './../user.service';
import { TopBarComponent } from './../top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsername;
  loginPassword;
  apiResponse;
  invalidLogin = true;
  user;

  constructor(private http: HttpClient,
              private userService: UserService,
              public router: Router) {
   }

  ngOnInit() {
  }

  login() {
    const json = {
      username: this.loginUsername,
      password: this.loginPassword
  };
    this.userService.progressMode = 'indeterminate';

    this.http.post('http://localhost:3000/api/login', json)
        .subscribe(
          res => {
            this.apiResponse = res;

            if (this.apiResponse.bv === 'N') {
              this.invalidLogin = false;

              setTimeout(() => {
                this.invalidLogin = true;
              }, 3000);
              this.userService.userLoggedIn = 'determinate';
            } else {
              const name = this.apiResponse.bv.split('|');
              this.user = name[1];
              this.userService.userLoggedIn = this.user;
              this.router.navigate(['/request']);
              this.userService.userLoggedIn = 'determinate';
            }
          },
          err => {
            this.apiResponse = err;
            console.log(err);
          }
        );
  }
}
