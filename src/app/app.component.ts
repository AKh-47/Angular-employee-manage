import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'employee';

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('data'));
    if (!data) {
      localStorage.setItem('data', JSON.stringify([]));
    }
  }
}
