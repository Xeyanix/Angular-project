import { Component } from '@angular/core';
import { SnakeService } from './snake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public data = [];
  constructor(private _products: SnakeService) {
   this._products.load().subscribe((result) => {
    // this.data = result['data'];
   });
  }
  title = 'http';
}
