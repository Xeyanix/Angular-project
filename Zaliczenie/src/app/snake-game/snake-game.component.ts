import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { PersonAndPreference } from '../app.component';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.scss']
})
export class SnakeGameComponent implements OnInit {


  
  @Output() public deleteCLicked = new EventEmitter<number>();
  constructor() {}


  ngOnInit(): void {
  }

  public delete(index: number) {

    this.deleteCLicked.emit(index);
  }

}
