import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertosComponent } from './puertos.component';

describe('PuertosComponent', () => {
  let component: PuertosComponent;
  let fixture: ComponentFixture<PuertosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuertosComponent]
    });
    fixture = TestBed.createComponent(PuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
