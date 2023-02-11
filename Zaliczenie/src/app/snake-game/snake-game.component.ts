import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { PersonAndPreference } from '../app.component';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  public toDisplay = true;
  public editing = true;

  @Output() public closegame = new EventEmitter();
  constructor() {}

 
  ngOnInit(): void {}

  public back() {
    this.toDisplay = !this.toDisplay;
    this.editing = true;
   this.closegame.emit();
  }
}
