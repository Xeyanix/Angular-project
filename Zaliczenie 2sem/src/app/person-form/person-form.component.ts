import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UserInfoService } from '../user-info.service';
import { FormBuilder, Validators } from '@angular/forms';

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
    required_token: 'To pole musi zawierac 4 znaki',
    Email: 'Podałeś błędny email. Wpisz prawidłowy email',
  };

  public myForm = this._fb.group({
    name: ['', [Validators.required]],
    Email: ['', [Validators.required]],
    token: ['', [Validators.required, Validators.minLength(4)]],
  });

  public get nameGetter() {
    return this.myForm.get('name');
  }
  public get emailGetter() {
    return this.myForm.get('Email');
  }
  public get tokenGetter() {
    return this.myForm.get('token');
  }

  public editing = true;
  public color: string | undefined;
  public availableColors = [
    'gray',
];

  constructor(
    private _router: Router,
    private _userInfoService: UserInfoService,
    private _fb: FormBuilder,
    private _route: ActivatedRoute
  ) { 
    this._route.params.subscribe((params) => {
    this.color = params['color'];
  });}

  selectColor(color: any): void {
    this._router.navigate(['/snake', color]);
    this._userInfoService.setNewUserName({
      snakeForm: this.myForm.get('name')?.value,
    });
  }

  ngOnInit() {}

  public play() {
    this._userInfoService.setNewUserName({
      snakeForm: this.myForm.get('name')?.value,
    });

    // alert('Success, access granted!');
    this._router.navigate(['/snake/game']);
  }
  
  onColorChange(event:any): void {
    const color = event.target.value;
    this._router.navigate(['/person-form', color], {
      relativeTo: this._route,
    });
  }
}
