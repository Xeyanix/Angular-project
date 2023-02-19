import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  public play = true;
  public seconds = 0;
  public interval: string | number | NodeJS.Timer | undefined;
  public display: string | number | NodeJS.Timer | undefined;
  public status: any;

  public score = 0;

  @Input() public data: Array<Person> = [];
  @Output() public closegame = new EventEmitter();
  

  constructor() {}

  ngOnInit(): void {}

  public back() {
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
    this.status = ['Started'];
  }

  public pauseTimer() {
    clearInterval(this.interval);
    this.status = ['Paused'];
  }

  public resetTimer() {
    this.seconds = 0;
    this.status = ['Ready'];
  }

  set addScore(val: number) {
    // this.score+=      //game.foodEaten
  }

  get currentScore() {
    return this.score;
  }
}
