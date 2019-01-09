import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistereduserDetailComponent } from './registereduser-detail.component';

describe('RegistereduserDetailComponent', () => {
  let component: RegistereduserDetailComponent;
  let fixture: ComponentFixture<RegistereduserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistereduserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistereduserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
