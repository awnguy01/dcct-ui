import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../services/member.service';
import { BehaviorSubject } from 'rxjs';
import { Member } from '../../../classes/models/member';
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
  selectedMember = new BehaviorSubject<Member>(undefined);

  memberList = new BehaviorSubject<Member[]>([]);

  constructor(readonly memberSvc: MemberService) {}

  ngOnInit(): void {
    this.memberSvc
      .getMembers()
      .pipe(tap((list: Member[]) => this.memberList.next(list)))
      .subscribe();
  }

  setSelectedMember(member: Member): void {
    this.selectedMember.next(member);
  }

  isSelectedMember(member: Member): boolean {
    return member === this.selectedMember.getValue();
  }
}
