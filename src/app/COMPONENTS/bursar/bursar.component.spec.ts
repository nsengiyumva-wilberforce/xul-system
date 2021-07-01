import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BursarComponent } from './bursar.component';

describe('BursarComponent', () => {
  let component: BursarComponent;
  let fixture: ComponentFixture<BursarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BursarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BursarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
