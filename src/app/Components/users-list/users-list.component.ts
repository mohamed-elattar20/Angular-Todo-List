import { Component } from '@angular/core';
import * as usersJson from '../../../assets/Json/users.json';
import { Iuser } from '../Interface/iuser';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  SearchIsVisible: boolean = true
  resetIsVisible: boolean = false
  usersList: Iuser[] = Array.from(usersJson)
  inputValue: string = '';
  usersFound: Iuser[] = [];
  searchForUser() {
    // console.log(this.inputValue);

    this.usersList = Array.from(usersJson)
    this.usersList = this.usersList.filter((user: any) => user.email.includes(this.inputValue) ? user : '')
    // console.log(this.usersList);
    this.resetIsVisible = true
    this.SearchIsVisible = false
    this.inputValue = ""
  }

  reset() {
    this.resetIsVisible = false
    this.SearchIsVisible = true
    this.usersList = Array.from(usersJson)
  }
}
