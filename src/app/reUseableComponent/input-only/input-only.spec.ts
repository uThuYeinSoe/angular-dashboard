import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOnly } from './input-only';

describe('InputOnly', () => {
  let component: InputOnly;
  let fixture: ComponentFixture<InputOnly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOnly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOnly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
