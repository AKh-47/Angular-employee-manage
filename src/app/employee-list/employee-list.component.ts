import { EmbeddedTemplateAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(public emp: EmployeeService) {}
  employees: [];
  search: string;

  ngOnInit(): void {
    this.employees = this.emp.get();
  }

  handleDelete(id) {
    let name: string;

    this.employees.forEach((emp: any) => {
      if (emp.id === id) {
        name = emp.name;
      }
    });

    const check = confirm(`Are you sure you want to delete ${name}?`);
    if (check) {
      this.emp.delete(id);
      this.employees = this.emp.get();
      this.search = '';
    }
  }

  handleChange(searchValue) {
    const searchResult = this.emp
      .get()
      .filter((emp) =>
        emp.name.toLowerCase().includes(searchValue.toLowerCase())
      );

    console.log(searchResult);

    if (searchResult.length < 1) {
      this.employees = this.emp.get();
    } else {
      this.employees = searchResult;
    }
  }
}
