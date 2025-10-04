import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSummaryCard } from './user-summary-card';

describe('UserSummaryCard', () => {
  let component: UserSummaryCard;
  let fixture: ComponentFixture<UserSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSummaryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSummaryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
