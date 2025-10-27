import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './tasklist.model';

/*Define a TypeScript interface for your task object
This ensures every Task has the same structure and helps with type checking.

interface Task {
 id: string;
 userId: string;
 title: string;
 summary: string;
  dueDate: string;
}
  */

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css',
})
export class TasklistComponent {
  // Input property
  // Receives a single `task` object from the parent component
  // The `!` tells TypeScript that this value will definitely be provided (not undefined)
  // `{ required: true }` ensures Angular enforces that this input must be passed in
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
