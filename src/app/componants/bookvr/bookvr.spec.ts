import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookvr } from './bookvr';

describe('Bookvr', () => {
  let component: Bookvr;
  let fixture: ComponentFixture<Bookvr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookvr],
    }).compileComponents();

    fixture = TestBed.createComponent(Bookvr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
