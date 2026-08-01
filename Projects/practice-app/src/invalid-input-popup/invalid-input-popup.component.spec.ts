import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidInputPopupComponent } from './invalid-input-popup.component';

describe('InvalidInputPopupComponent', () => {
  let component: InvalidInputPopupComponent;
  let fixture: ComponentFixture<InvalidInputPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidInputPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidInputPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
