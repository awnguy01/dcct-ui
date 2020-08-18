import { Injectable } from '@angular/core';
import { Observable, scheduled } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { asap } from 'rxjs/internal/scheduler/asap';
import { MOCK_MEMBERS } from '../../assets/mock-data/mock-members';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(readonly http: HttpClient) {}

  getMembers(): Observable<any> {
    // return this.http.get('');
    return scheduled([MOCK_MEMBERS], asap);
  }
}
