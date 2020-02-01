import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { requests } from './../request';
// import { requestList } from './../request-list';

@Component({
  selector: 'app-job-order',
  templateUrl: './job-order.component.html',
  styleUrls: ['./job-order.component.css', './../request/request.component.css']
})
export class JobOrderComponent implements OnInit {
  manpowerList = [];
  requestType = 'details';
  request;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.request = requests[+params.get('id') - 1];
    });
  }
}
