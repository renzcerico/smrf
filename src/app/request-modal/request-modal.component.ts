import { requests } from './../request';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.css']
})
export class RequestModalComponent implements OnInit {
  request = {
      id: 1,
      recipient: 1,
      date_required: '2020-01-03',
      priority: 'normal',
      req_details: [{ request: 1, description: 'SET UP / ADJUSTMENT', remarks: 'Your remarks.' },
                    { request: 2, description: 'REPAIR / REPLACEMENT', remarks: 'Remarks' }],
      description: 'This is a description. URGENT!',
      machine: 'none',
      representative: '1',
      department: 'opt',
      stopped: '2020-10-23T22:01',
      status: 'delivered'
  };

  // @Input() request;
  requestID;

  constructor(public modalService: NgbModal, public route: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    // this.request;
  }

  getRequest(content) {
    this.modalService.open(content, { size: 'lg' });
    console.log(content);
    return false;
  }
}
