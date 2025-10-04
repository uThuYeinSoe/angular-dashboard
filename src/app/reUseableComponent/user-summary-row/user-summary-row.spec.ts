import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSummaryRow } from './user-summary-row';

describe('UserSummaryRow', () => {
  let component: UserSummaryRow;
  let fixture: ComponentFixture<UserSummaryRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSummaryRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSummaryRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
