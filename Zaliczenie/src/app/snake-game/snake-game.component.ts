import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../app.component';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss'],
})
export class SnakeGameComponent implements OnInit {
  @Input() public data: Array<Person> = [];
  @Output() public closegame = new EventEmitter();
  constructor() {}

 
  ngOnInit(): void {}

  public back() {
   this.closegame.emit();
  }
}
