import { Component, OnInit, OnDestroy } from '@angular/core';
import { MemberService } from '../../../services/member.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Member } from '../../classes/models/member';
import { DataTableColumn } from '../../classes/models/data-table-column';
import { tap } from 'rxjs/operators';

const TABLE_COLS: DataTableColumn[] = [
  { id: 'firstName', label: 'First' },
  { id: 'lastName', label: 'Last' },
  { id: 'nganh', label: 'Nganh' },
  { id: 'cap', label: 'Cap' },
  { id: 'birthDate', label: 'Birthdate' },
  { id: 'phone', label: 'Phone' },
  { id: 'email', label: 'Email' },
];

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
})
export class RosterComponent implements OnInit {
  tableCols: DataTableColumn[] = TABLE_COLS;
  tableHeaders: string[] = TABLE_COLS.map((col: DataTableColumn) => col.id);

  memberList = new BehaviorSubject<Member[]>([]);

  constructor(readonly memberSvc: MemberService) {}

  ngOnInit(): void {
    this.memberSvc
      .getMembers()
      .pipe(tap((list: Member[]) => this.memberList.next(list)))
      .subscribe();
  }
}
