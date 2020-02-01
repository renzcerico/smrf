import { Component, OnInit, Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-request-summary',
  templateUrl: './request-summary.component.html',
  styleUrls: ['./request-summary.component.css']
})
export class RequestSummaryComponent implements OnInit {
  controlNumber = '010320201';
  dateRequested = 'Jan. 03, 2020';
  requestedBy = 'R. Cerico';
  approvedBy = 'A. Approver';
  requestedPriority = 'NORMAL';
  requestedDateRequired = 'Jan. 25, 2020';
  requestedDepartment = 'opt';
  requestedMachine = 'SO01';
  reqDetails;

  attrAttachment = false;
  requestedAttachment = '../../assets/img/backend.jpg';

  @Input() setRequest;
  constructor() { }

  ngOnInit() {
    this.reqDetails = this.setRequest.req_details;
    console.log(this.setRequest);
  }

  setAttachment() {
    this.attrAttachment = !this.attrAttachment;
  }

}
