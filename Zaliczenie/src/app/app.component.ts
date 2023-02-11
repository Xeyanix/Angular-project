import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public displayGame = false;
  public snakeGame: string | null = null;
  constructor() {}


  public startGame() {
 
    this.displayGame = true;
  
  }

  public closeGame() {
 
    this.displayGame = false;
  }



}
