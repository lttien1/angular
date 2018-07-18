import { Component } from '@angular/core';
import { UserStorage } from './utils/user-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userStorage: UserStorage) { }

  title = 'MoneyTree Welcome';
  loggedUser = this.userStorage.getUser();
}
