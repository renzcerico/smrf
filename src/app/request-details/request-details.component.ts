import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { requests } from './../request';
import { requestList } from './../request-list';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css', './../request/request.component.css']
})
export class RequestDetailsComponent implements OnInit {
  request;
  reqRecipient;
  reqDateRequired;
  reqPriority;
  reqMachine = 'none';
  reqDepartment = '';
  reqMachineStopped;
  reqDescription;
  reqDetails;
  reqStatus;
  requestList = requestList;
  controlNumber = '010320201';
  requestedBy = 'R. Cerico';
  approvedBy = 'A. Approver';
  userLevel = 'head';
  dateRequested = 'Jan. 03, 2020';
  requestedPriority = 'NORMAL';
  requestedDateRequired = 'Jan. 25, 2020';
  requestedDepartment = 'opt';
  requestedMachine = 'SO01';

  requestType = 'details';
  requestId: number;

  attrAttachment = false;
  requestedAttachment = '../../assets/img/backend.jpg';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.request = requests[+params.get('id') - 1];
      this.reqPriority = this.request.priority;
      this.requestId = this.request.id;
      this.reqDetails = this.request.req_details;
      this.reqStatus = this.request.status;
    });
  }

  setAttachment() {
    this.attrAttachment = !this.attrAttachment;
  }

}
