import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';
import { Task } from '../../interfaces/task';

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  //tasks = [
  //  { title: 'Finish Angular app', category: 'School', priority: 'High', completed: false },
  //  { title: 'Walk the dog', category: 'Personal', priority: 'Medium', completed: true },
  //  { title: 'Team meeting at 3PM', category: 'Work', priority: 'High', completed: false }
  //];
  tasks: Task[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error('Error loading tasks', err)
    });
  }
  deleteTask(taskId: string) {
    this.api.deleteTask(taskId).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task._id !== taskId);
      },
      error: (err) => console.error('Error deleting task:', err)
    });
  }
  
  toggleComplete(task: any) {
    const updatedTask = { ...task, completed: !task.completed };
    this.api.updateTask(task._id, updatedTask).subscribe({
      next: () => {
        task.completed = updatedTask.completed; // update locally after server confirms
      },
      error: (err) => console.error('Error updating task:', err)
    });
  }
}