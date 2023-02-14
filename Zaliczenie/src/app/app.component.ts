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

  public PersonName: Array<Person> = []
  constructor() {}

  public addPersonNameFromInput(data: Person) {
    this.PersonName.push({
      name: data.name,
    });
  }

  public startGame() {
    this.displayGame = true;
  }

  public closeGame() {
    this.displayGame = false;
  }
}
