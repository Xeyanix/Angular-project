import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SnakeService } from './snake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public snakeGame: string | null = null;

  
  constructor(private _products: SnakeService) {

  }
  title = 'http';
  
  


}
