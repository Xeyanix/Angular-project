import { Component } from '@angular/core';

export interface PersonAndPreference {
name: string,
familyName: string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public max: number = 4;
  public snakeGame: string | null = null;
  public colorClass: string = 'basic';
  constructor() {}

  public onFullnameChanged(fullname: string) {
    this.snakeGame = fullname;
  }
}
