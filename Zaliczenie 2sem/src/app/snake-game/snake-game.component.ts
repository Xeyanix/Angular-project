import { Component, OnInit } from '@angular/core';
import { PersonFormComponent } from '../person-form/person-form.component';
import { UserInfoService } from '../user-info.service';
import { SnakeService } from '../snake.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  public startTime!: Date;
  public elapsedTime!: number;
  public seconds = 0;
  public interval: string | number | NodeJS.Timer | undefined;
  public points = 0;
  public status: string = 'Ready';
  public UserInfo: any;
  public data: any;

  constructor(
    private _userInfoService: UserInfoService,
    private SnakeService: SnakeService,
    private DataService: DataService
  ) {

    
    this._userInfoService.addPersonNameFromInput().subscribe((text) => {
      this.UserInfo = text;
    });


    this.SnakeService.load().subscribe(data => this.data = data);
  }

  ngOnInit() {}

  public startTimer() {
    this.startTime = new Date();
    this.elapsedTime = 0;

    this.interval = setInterval(() => {
      const currentTime = new Date().getTime();
      this.elapsedTime = Math.floor(
        (currentTime - this.startTime.getTime()) / 1000
      );
    }, 1000);

    setTimeout(() => {
      clearInterval(this.interval);
    }, 60000); // czas trwania licznika (60 sekund)

    this.status = 'Started';
  }

  public pauseTimer() {
    clearInterval(this.interval);
    this.status = 'Paused';
  }

  public resetTimer() {
    this.elapsedTime = 0;
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

  public formatTime(timeInSeconds: number): string {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
