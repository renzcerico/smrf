import { UserService } from './../user.service';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { recipient } from './../recipient';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css', '../request/request.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class RecipientComponent implements OnInit {
  @Input() recipientID;

  recipient = recipient;

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  selectRecipient(val) {
    this.recipientID = val;
    this.userService.recipient = this.recipientID;
  }

  getRecipient() {
    return this.recipientID;
  }

}
