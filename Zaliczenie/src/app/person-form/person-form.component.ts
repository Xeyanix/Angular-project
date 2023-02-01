import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { PersonAndPreference } from '../app.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  public name = '';
  public familyName = '';
  public editing = true;
  public snakeGame: string | null = null;
  public toDisplay = true;

  // @Input() public data =  new EventEmitter<PersonAndPreference>();

  @Output() public formChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public game() {
    this.toDisplay = !this.toDisplay;
    this.editing = false;
    this.snakeGame = !this.name + ' ' + !this.familyName;

    this.formChange.emit(this.snakeGame);
  }

  public back() {
    this.toDisplay = !this.toDisplay;
    this.editing = true;
    this.formChange.emit('');
  }
}
