import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { PersonAndPreference } from '../app.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  public snakeForm: {
    name: string;
    Email: string;
  } = {
    name: ''!,
    Email: ''!,
  };

  public validationErros = {
    required: 'To pole jest wymagane',
    Email: 'Podałeś błędny email. Wpisz prawidłowy email',
  };
  public toDisplay = true;
  public editing = true;
  public table: string | null = null;

  @Output() public formChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public play() {
   
    this.editing = false;
    this.table = !this.snakeForm.name + ' ' + !this.snakeForm.Email;
    // this.table = `${!this.snakeForm.name} ${!this.snakeForm.email}`;
    this.formChange.emit(this.table);


  }

  public back() {
    this.toDisplay = !this.toDisplay;
    this.editing = true;
    this.formChange.emit('');
  }
}
