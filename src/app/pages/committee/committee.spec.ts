import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeComponent } from './committee';

describe('Committee', () => {
  let component: CommitteeComponent;
  let fixture: ComponentFixture<CommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
