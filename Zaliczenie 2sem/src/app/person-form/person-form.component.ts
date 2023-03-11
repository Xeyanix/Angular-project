import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../definitions';
import { Router } from '@angular/router';

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

  public editing = true;
  public table: string | null = null;

  @Output() name = new EventEmitter<Person>();

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public play(): void {
    this.name.emit({
      name: this.snakeForm.name,
    });
    this.snakeForm.name = '';

    this.editing = false;
    this.table = !this.snakeForm.name + ' ' + !this.snakeForm.Email;
    // this.table = `${!this.snakeForm.name} ${!this.snakeForm.email}`;

    // alert('Success, access granted!');
    this._router.navigate(['/snake']);
  }
}
