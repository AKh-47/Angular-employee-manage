import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-registeration',
  templateUrl: './employee-registeration.component.html',
  styleUrls: ['./employee-registeration.component.css'],
})
export class EmployeeRegisterationComponent implements OnInit {
  constructor(public fb: FormBuilder, public emp: EmployeeService) {}

  public form;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      about: ['', [Validators.required]],
      joiningDate: [null, [Validators.required]],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get position() {
    return this.form.get('position');
  }

  get about() {
    return this.form.get('about');
  }

  get joiningDate() {
    return this.form.get('joiningDate');
  }

  handleSubmit() {
    const employee = this.form.value;
    this.form.reset();
    this.emp.set(employee);
  }

  setPlaceholder(field) {
    return field.invalid && field.dirty ? 'This field in required' : '';
  }
}
