import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public snakeGame: string | null = null;
  constructor() {}

  public onFullnameChanged(fullname: string) {
    this.snakeGame = fullname;
   
  }
}
