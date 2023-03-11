import { Component } from '@angular/core';
import { SnakeService } from './snake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(private _products: SnakeService) {}
  title = 'http';
}
