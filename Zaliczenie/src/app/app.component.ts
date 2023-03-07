import { Component } from '@angular/core';

export interface Person {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public displayGame = false;
  public snakeGame: string | null = null;
  public PersonName: Array<Person> = [];


  constructor() {}

  public addPersonNameFromInput(text: Person) {
    this.PersonName.push({
      name: text.name,
    });
  }

  public startGame() {
    this.displayGame = true;
  }

  public closeGame() {
    this.displayGame = false;
  }
}
