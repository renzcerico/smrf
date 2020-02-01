import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  request;
  requestDetails = new BehaviorSubject <string>('');
  serviceRepresentative;
  serviceRepresentativeDetails = new BehaviorSubject <any>('');

  constructor(public http: HttpClient) {
      this.requestDetails.next(this.request);
  }
}
