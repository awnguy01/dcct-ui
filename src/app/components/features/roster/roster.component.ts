import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../services/member.service';
import { BehaviorSubject } from 'rxjs';
import { MemberObject } from '../../../classes/models/member-object';
import { DataTableColumn } from '../../../classes/models/data-table-column';
import { tap } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

const TABLE_COLS: DataTableColumn[] = [
  { id: 'firstName', label: 'First' },
  { id: 'middleName', label: 'Middle' },
  { id: 'lastName', label: 'Last' },
  { id: 'birthDate', label: 'Birthday' },
  { id: 'saintName', label: 'Saint' },
  // { id: 'phonePrimary', label: 'Primary Phone' },
  // { id: 'phoneSecondary', label: 'Alt Phone' },
  // { id: 'email', label: 'Email' },
  // { id: 'address', label: 'Address' },
  { id: 'nganh', label: 'Nganh' },
  { id: 'cap', label: 'Cap' },
  { id: 'joinDate', label: 'Joined' },
  { id: 'isActive', label: 'Active' },
];

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
  animations: [
    trigger('optionsExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', padding: '0 0.5rem' })
      ),
      state('expanded', style({ height: '*', padding: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class RosterComponent implements OnInit {
  tableCols: DataTableColumn[] = TABLE_COLS;
  tableHeaders: string[] = TABLE_COLS.map((col: DataTableColumn) => col.id);
  selectedMember = new BehaviorSubject<MemberObject>(undefined);

  memberList = new BehaviorSubject<MemberObject[]>([]);

  constructor(readonly memberSvc: MemberService) {}

  ngOnInit(): void {
    this.memberSvc
      .getMembers()
      .pipe(tap((list: MemberObject[]) => this.memberList.next(list)))
      .subscribe();
  }

  setSelectedMember(member: MemberObject): void {
    this.selectedMember.next(member);
  }

  isSelectedMember(member: MemberObject): boolean {
    return member === this.selectedMember.getValue();
  }
}
