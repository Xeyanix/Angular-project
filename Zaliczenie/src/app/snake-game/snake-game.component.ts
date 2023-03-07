import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  public seconds = 0;
  public interval: string | number | NodeJS.Timer | undefined;
  public display: string | number | NodeJS.Timer | undefined;
  public status: string = 'Ready';
  public points = 0;

  @Input() public data: Array<Person> = [];
  @Output() public closegame = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public exit() {
    this.closegame.emit();
    this.data.splice(0);
  }

  public startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        this.seconds++;
      } else {
        this.seconds++;
      }
    }, 1000);
    this.status = 'Started';
  }

  public pauseTimer() {
    clearInterval(this.interval);
    this.status = 'Paused';
  }

  public resetTimer() {
    this.seconds = 0;
    clearInterval(this.interval);
    this.status = 'Ready';
    this.points = 0;
  }
  public gameover() {
    clearInterval(this.interval); //stop licznik
    this.status = 'Game Over'; //status game over
  }

  public countPoints() {
    this.points = this.points + 1;
  }
}
