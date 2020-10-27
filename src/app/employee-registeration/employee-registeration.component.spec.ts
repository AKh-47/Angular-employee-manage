import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegisterationComponent } from './employee-registeration.component';

describe('EmployeeRegisterationComponent', () => {
  let component: EmployeeRegisterationComponent;
  let fixture: ComponentFixture<EmployeeRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
