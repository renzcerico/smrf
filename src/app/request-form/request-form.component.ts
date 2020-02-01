import { UserService } from './../user.service';
import { RecipientComponent } from './../recipient/recipient.component';
import { recipient } from './../recipient';
import { requestList } from './../request-list';
import { Component, OnInit, Injectable, Input, Output, EventEmitter, ModuleWithComponentFactories } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  reqPriority = 'normal';
  reqDateRequired = '';
  reqMachine;
  reqDepartment;
  reqRepresentative;
  reqDetails = [];
  reqMachineStopped = '';
  reqMachineResumed = '';
  reqRecipient;
  json = {};
  errorRequired = true;
  errorNum = 0;
  userLevel = 'user';
  reqStatus: string;
  reqAttachment;
  reqNotes;

  request = requestList;
  setRequestList;
  reqSelect;
  reqRemarks;
  serviceRep;
  departments;

  response;

  @Input() requestType: any;
  @Input() requestId: number;
  @Input() requestDetails;

  constructor(public http: HttpClient, public userService: UserService) { }

  ngOnInit() {
    this.getServiceRepresentative();
    this.getDepartments();
    this.requestTypeChecking();

    // ($('#reqDateRequired') as any).daterangepicker({
    //     singleDatePicker: true,
    //     autoApply: true,
    //     autoUpdateInput: true,
    //     opens: 'center',
    //     locale: {
    //       format: 'MMM. DD, Y'
    //     }
    // });
  }

  ngAfterContentChecked() {
    this.getDetails();
    this.setRequestList;
  }

  // Checking type of request (request, approve, create job, order, done)
  requestTypeChecking() {
    if (this.requestType === 'request') {
      this.requestType = 'request';
    } else if (this.requestType === 'details') {
      this.getDetails();
      // this.changeRepresentative(this.reqRepresentative);
    }
  }

  // Get details if record is existing.
  getDetails() {
    if (this.requestType !== 'request') {
      this.reqPriority =  this.requestDetails.priority;
      this.reqDateRequired = this.requestDetails.date_required;
      this.reqMachine = this.requestDetails.machine;
      this.reqDepartment = this.requestDetails.department;
      this.reqRepresentative = this.requestDetails.representative;
      this.reqDetails = this.requestDetails.req_details;
      this.reqRecipient = this.requestDetails.recipient;
      this.reqStatus = this.requestDetails.status;
    }
  }

  // Validation for required fields.
  requiredFields() {
    if (this.reqDateRequired === '' || this.reqDetails.length === 0 || this.reqDepartment === '') {
      this.error();
    } else {
      if (this.userLevel === 'user') {
        this.reqRecipient = this.userService.recipient;

        if (this.reqRecipient === '') {
          this.error();
        }
      } else {
        this.reqRecipient = 0;
      }
      this.errorNum = 0;
    }
  }

  // Display error.
  error() {
    this.errorNum = 1;
    this.errorRequired = false;

    setTimeout(() => {
        this.errorRequired = true;
    }, 3000);
  }

  // Set priority if urgent / not.
  priority(val) {
    this.reqPriority = val;
    console.log(val);
  }

  // If button save was clicked.
  btnRequest() {
      this.requiredFields();

      if (this.errorNum === 0) {
          this.reqAttachment = $('#reqAttachment').prop('files');

          this.json = {
            reqRecipient: this.reqRecipient,
            reqDateRequired: moment(this.reqDateRequired).format('Y/MM/DD'),
            reqPriority: this.reqPriority,
            reqMachine: this.reqMachine,
            reqDepartment: this.reqDepartment,
            reqRepresentative: this.reqRepresentative,
            reqDetails: this.reqDetails,
            reqAttachment: this.reqAttachment,
            reqNotes: this.reqNotes
          };

          this.http.post('http://localhost:3000/api/requests', this.json)
                  .subscribe(
                    res => {
                      this.response = res;
                      if (this.response.rowsAffected > 0) {
                        setTimeout(() => {
                            this.reset();
                            $('#reqRecipient').prop('selectedIndex', 0);
                        }, 3000);
                      }
                    }, err => {
                      console.log(err);
                    }
                  );

          console.log(this.json);
      }
  }

  // Reset form
  reset() {
    this.reqPriority = 'normal';
    this.reqDateRequired = '';
    this.reqMachine;
    this.reqDepartment;
    this.reqDetails = [];
    this.reqRecipient = 0;
  }

  // Add a request.
  setRequestDetails(val) {
    const remarks = this.reqRemarks;
    const request: any = this.reqSelect;
    const description = $('#reqSelect').text();
    const json = {
      request,
      description,
      remarks
    };

    if (request != null && remarks != null) {
      const isExists = this.reqDetails.some(data => parseInt(data.request, 10) === parseInt(request, 10));
      if (!isExists) {
        this.reqDetails.push(json);
      }
    }

    this.reqSelect = 0;
    this.reqRemarks = '';
    ($('#reqSelect') as any).focus();

    console.log(this.reqDetails);
  }

  // Remove a request.
  remove(id) {
    for (let i = 0; i < this.reqDetails.length; i++) {
      if (this.reqDetails[i].request === id) {
          this.reqDetails.splice(i, 1);
      }
    }

    return false;
  }

  getServiceRepresentative() {
    const url = 'http://localhost:3000/api/service-representatives';
    this.http.get(url)
             .subscribe(
                 data => {
                     this.serviceRep = data;
                 },
                 err => {
                     console.log(err);
                 });
  }

  getDepartments() {
    const url = 'http://localhost:3000/api/departments';
    this.http.get(url)
             .subscribe(
                 data => {
                     this.departments = data;
                 },
                 err => {
                     console.log(err);
                 }
              );
  }

  getRequestList(dept) {
    const url = 'http://localhost:3000/api/request-list';
    const representative = { department: dept };

    this.http.post(url, representative)
             .subscribe(
                 data => {
                   this.setRequestList = [];
                   this.setRequestList = data;
                 },
                 err => {
                     console.log(err);
                 }
             );
  }

}
