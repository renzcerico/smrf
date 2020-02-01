import { RequestModalComponent } from './../request-modal/request-modal.component';
import { Component, OnInit } from '@angular/core';
import { requests } from './../request';

@Component({
  selector: 'app-manage-requests',
  templateUrl: './manage-requests.component.html',
  styleUrls: ['./manage-requests.component.css']
})
export class ManageRequestsComponent implements OnInit {

  requests = requests;
  public modal:RequestModalComponent;

  constructor() { }

  ngOnInit() {
  }

  checkValue(req) {
    this.modal.getRequest(true);
  }

}
