import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

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
    name: '',
    Email: '',
  };

  public validationErros = {
    required: 'To pole jest wymagane',
    Email: 'Podałeś błędny email. Wpisz prawidłowy email',
  };

  public editing = true;

  constructor(
    private _router: Router,
    private _userInfoService: UserInfoService
  ) {}

  ngOnInit() {}

  public play() {
    this._userInfoService.setNewUserName({
      snakeForm: this.snakeForm.name,
    });

    // alert('Success, access granted!');
    this._router.navigate(['/snake']);
  }
}
