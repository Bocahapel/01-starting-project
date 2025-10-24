//import { Component, computed, signal } from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

type User = { id: string; name: string; avatar: string };

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

  // ! is for telling typescript that we will assign the value without ts knowing where
  //Input pass data from parent (app.component) to this child
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) user!: {
  //   id: string;
  //   name: string;
  //   avatar: string;
  // };

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter(); //Output send data from this child to parent (app.component), check app.component.html

  //avatar = input.required<string>();  <-- this is how to use input signal instead of @Input

  get userImage() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
    //when Onclick happen, this method will emit user's ID to Output
  }
}
