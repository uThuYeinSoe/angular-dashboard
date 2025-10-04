import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowContainerInSummary } from './row-container-in-summary';

describe('RowContainerInSummary', () => {
  let component: RowContainerInSummary;
  let fixture: ComponentFixture<RowContainerInSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowContainerInSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowContainerInSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
