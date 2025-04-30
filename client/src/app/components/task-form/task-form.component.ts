import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  standalone: true,
  selector: 'app-task-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task = {
    title: '',
    category: '',
    priority: 'Medium',
    completed: false
  };

  constructor(private api: ApiService) {}

  onSubmit() {
    this.api.createTask(this.task).subscribe({
      next: () => {
        alert('Task created!');
        this.task = { title: '', category: '', priority: 'Medium', completed: false };
      },
      error: () => alert('Failed to create task')
    });
  }
}
