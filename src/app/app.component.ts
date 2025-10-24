import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  //selectedUserId = 'u1'; //A property that holds the currently selected user ID (default: 'u1')
  selectedUserId?: string;

  //A getter that returns the full user object based on the current selectedUserId.
  // It re-evaluates automatically whenever selectedUserId changes.
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  //A method that receives data (user ID) from the child component and updates the selectedUserId accordingly.
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
