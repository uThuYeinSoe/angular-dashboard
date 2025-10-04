import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticModal } from './notic-modal';

describe('NoticModal', () => {
  let component: NoticModal;
  let fixture: ComponentFixture<NoticModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
