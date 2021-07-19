import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAssetsComponent } from './school-assets.component';

describe('SchoolAssetsComponent', () => {
  let component: SchoolAssetsComponent;
  let fixture: ComponentFixture<SchoolAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
