import { recipient } from './recipient';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoggedIn: string;
  userLoggedInSub = new BehaviorSubject <string>('');

  progressMode: string;
  progressModeSub = new BehaviorSubject <string>('');

  recipient: string;
  recipientSub = new BehaviorSubject <string>('');

  constructor(public http: HttpClient) {
    this.userLoggedInSub.next(this.userLoggedIn);
    this.progressModeSub.next(this.progressMode);
    this.recipientSub.next(this.recipient);
  }
}
