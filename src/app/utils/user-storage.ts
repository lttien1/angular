import { AccountModel } from '../models';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserStorage {
  USER_ID: string = 'account';
  setUser(user: AccountModel) {
    localStorage.setItem(this.USER_ID, JSON.stringify(user));
  }
  getUser () : AccountModel | string {
    const user = localStorage.getItem(this.USER_ID);
    return user ? JSON.parse(user) : null;
  }
}