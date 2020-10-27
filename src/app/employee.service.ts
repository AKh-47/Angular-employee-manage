import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: string;

  constructor() {}

  private updateStorage(obj) {
    localStorage.setItem('data', JSON.stringify(obj));
  }

  get() {
    const data = JSON.parse(localStorage.getItem('data'));
    return data;
  }

  set(emp) {
    let newData;

    const employee = { ...emp, id: uuid() };

    try {
      const oldData = this.get();
      newData = [...oldData, employee];
    } catch {
      newData = [employee];
    }

    this.updateStorage(newData);
  }

  delete(id) {
    const oldData = this.get();
    const newData = oldData.filter((emp) => emp.id !== id);
    this.updateStorage(newData);
  }
}
