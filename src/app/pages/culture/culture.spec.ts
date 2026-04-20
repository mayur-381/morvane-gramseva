import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  CultureComponent } from './culture';

describe('Culture', () => {
  let component: CultureComponent;
  let fixture: ComponentFixture<CultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultureComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
