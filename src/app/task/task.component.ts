import { Component, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [HeaderComponent, TasklistComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() name?: string; //input to receive data from parent (app.component)
}
