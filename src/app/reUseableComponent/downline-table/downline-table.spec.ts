import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlineTable } from './downline-table';

describe('DownlineTable', () => {
  let component: DownlineTable;
  let fixture: ComponentFixture<DownlineTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownlineTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownlineTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
