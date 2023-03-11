import { Component, OnInit } from '@angular/core';
import { PersonFormComponent } from '../person-form/person-form.component';
import { UserInfoService } from '../user-info.service';

import { SnakeService } from '../snake.service';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  public seconds = 0;
  public interval: string | number | NodeJS.Timer | undefined;
  public points = 0;
  public status: string = "Ready";
  public UserInfo: any;

  constructor(private _userInfoService: UserInfoService) {
    this._userInfoService.addPersonNameFromInput().subscribe((text) => {
      this.UserInfo = text;
    });
  }

  ngOnInit() {}

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
