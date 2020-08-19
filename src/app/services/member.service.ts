import { Injectable } from '@angular/core';
import { Observable, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLStore } from '../classes/constants/URLStore';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(readonly http: HttpClient) {}

  getMembers(): Observable<any> {
    return this.http.get(URLStore.GET_MEMBERS);
  }
}
