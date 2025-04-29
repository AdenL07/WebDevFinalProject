import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { title: 'Finish Angular app', category: 'School', priority: 'High', completed: false },
    { title: 'Walk the dog', category: 'Personal', priority: 'Medium', completed: true },
    { title: 'Team meeting at 3PM', category: 'Work', priority: 'High', completed: false }
  ];
}