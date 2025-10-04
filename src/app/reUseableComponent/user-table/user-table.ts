import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModal } from '../data-modal/data-modal';

export interface UserRow {
  userName: string;
  userId: string;
  mainUnit: number | string;
  ticket: number | string;
  status: 'Active' | 'In-Active';
  email: string;
  role: string;
  securityCode: string;
  lastLogin: string;
}

@Component({
  selector: 'app-user-table',
  imports: [CommonModule, DataModal],
  standalone: true,
  templateUrl: './user-table.html',
  styleUrl: './user-table.scss',
})
export class UserTable {
  @Input() rows: UserRow[] = [];
  protected readonly Math = Math;

  isDepositOpen = false;

  pageIndex = signal(0);
  pageSize = signal(10);
  sizes = [5, 10, 20, 50];

  total = computed(() => this.rows.length);
  pageCount = computed(() => Math.max(1, Math.ceil(this.total() / this.pageSize())));

  pageRows = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    return this.rows.slice(start, start + this.pageSize());
  });

  // actions
  first = () => this.pageIndex.set(0);
  prev = () => this.pageIndex.update((i) => Math.max(0, i - 1));
  next = () => this.pageIndex.update((i) => Math.min(this.pageCount() - 1, i + 1));
  last = () => this.pageIndex.set(this.pageCount() - 1);
  setSize(size: number) {
    const oldStart = this.pageIndex() * this.pageSize();
    this.pageSize.set(size);
    // keep roughly the same first item in view
    this.pageIndex.set(Math.floor(oldStart / size));
  }

  ngOnInit() {
    if (this.rows.length === 0) {
      this.rows = [
        {
          userName: 'Developer',
          userId: 'SE0000001',
          mainUnit: 0,
          ticket: 0,
          status: 'Active',
          email: 'thuyeinsoe302017@gmail.com',
          role: 'Senior Master',
          securityCode: '123456',
          lastLogin: '19 Aug 2025, 08:21:40 PM',
        },
      ];
    }
  }
  userIdCopy(id: string) {
    console.log(id);
  }
  depositOpen() {}
}
