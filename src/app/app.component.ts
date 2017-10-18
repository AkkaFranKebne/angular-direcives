import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersOdd = [1, 3, 5];
  numbersEven = [2, 4];
  onlyOdd = false;
}
