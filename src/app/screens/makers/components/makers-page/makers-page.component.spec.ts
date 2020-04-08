import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakersPageComponent } from './makers-page.component';

describe('MakersPageComponent', () => {
  let component: MakersPageComponent;
  let fixture: ComponentFixture<MakersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
