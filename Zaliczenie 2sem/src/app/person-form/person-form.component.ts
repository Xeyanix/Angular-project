import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import { FormBuilder, Validators} from '@angular/forms';

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

  public myForm = this._fb.group({
    name:  ['', [Validators.required]],
    Email: ['', [Validators.required]],
  });

  public get nameGetter() {
    return this.myForm.get('name');
  }

  public get emailGetter() {
    return this.myForm.get('Email');
  }

  public editing = true;

  constructor(
    private _router: Router,
    private _userInfoService: UserInfoService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {}

  public play() {
    this._userInfoService.setNewUserName({
      snakeForm: this.myForm.get('name')?.value,
    });

    // alert('Success, access granted!');
    this._router.navigate(['/snake']);
  }
}
