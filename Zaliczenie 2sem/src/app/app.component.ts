import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Person {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public snakeGame: string | null = null;
  public PersonName: Array<Person> = [];

  constructor() {}

  public addPersonNameFromInput(tekst: Person) {
    this.PersonName.push({
      name: tekst.name,
    });
  }


}
