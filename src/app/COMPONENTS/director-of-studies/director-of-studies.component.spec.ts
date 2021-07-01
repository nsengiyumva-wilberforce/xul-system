import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOfStudiesComponent } from './director-of-studies.component';

describe('DirectorOfStudiesComponent', () => {
  let component: DirectorOfStudiesComponent;
  let fixture: ComponentFixture<DirectorOfStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorOfStudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOfStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
