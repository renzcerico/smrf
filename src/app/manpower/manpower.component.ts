import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-manpower',
  templateUrl: './manpower.component.html',
  styleUrls: ['./manpower.component.css']
})
export class ManpowerComponent implements OnInit {
  manpower;
  jobManpower = 0;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getManpower();
  }

  getManpower() {
    this.http.get('http://localhost:3000/api/personnel/')
             .subscribe(
                res => {
                  this.manpower = res;
                  this.manpower.sort();
                },
                err => {
                  console.log(err);
                }
             );
  }

}
