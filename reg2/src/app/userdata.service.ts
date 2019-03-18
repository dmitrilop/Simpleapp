import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgbdModalOptionsComponent} from './modal-options';

@Injectable()
export class UserdataService {

  constructor(private httpClient: HttpClient, private modalWindow: NgbdModalOptionsComponent) { }
  public post(url: string, userData: any): Observable<any> {
    return this.httpClient
      .post(url, userData)
      .map( res => {
        if (true) {
          this.modalWindow.open();
        }
      });
  }
}
