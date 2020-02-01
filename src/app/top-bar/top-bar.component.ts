import { UserService } from './../user.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { requests } from './../request';
import { Component, OnInit } from '@angular/core';
import { Injectable, Input, Directive, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  collapsed = true;
  requests = requests;

  user;
  response;
  progressMode = 'determinate';

  constructor(public http: HttpClient, private userService: UserService, public router: Router) {
    this.user = userService.userLoggedIn;
    this.progressMode = userService.progressMode;
  }

  ngOnInit() {
    // this.getUser();
  }

  ngAfterContentChecked() {
    this.user = this.userService.userLoggedIn;
    this.progressMode = this.userService.progressMode;
  }

  getUser() {
    this.http.get('http://localhost:3000/api/session')
              .subscribe(res => {
                this.response = res;
                const data = this.response.bv.split('|');
                this.user = data[1];
              });

    if (!this.user) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['request']);
    }
  }

  logout() {
    location.reload();
  }

}
