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
  // Inputs are properties that receive data from the parent component (app.component)
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  // Mock data: A hardcoded list of task objects
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  // Getter method that filters tasks based on the current userId
  // It returns only the tasks that belong to the selected user
  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
