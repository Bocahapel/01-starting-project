//import { Component, computed, signal } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // userImage = computed(() => 'assets/users/' + this.selectedUser().avatar);

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string; // ! is for telling typescript that we will assign the value without ts knowing where
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  //avatar = input.required<string>();  <-- this is how to use input signal instead of @Input

  get userImage() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.id);
  }
}
