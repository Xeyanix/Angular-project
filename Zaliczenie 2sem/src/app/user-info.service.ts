import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private newUser = new BehaviorSubject<any>({});

  constructor() {}

  setNewUserName(user: any) {
    this.newUser.next(user);
  }

  addPersonNameFromInput() {
    return this.newUser.asObservable();
  }
}
