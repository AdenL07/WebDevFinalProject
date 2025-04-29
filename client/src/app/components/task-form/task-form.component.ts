import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit() {
    console.log('Task submitted:', this.task);
    alert('Task created successfully!');
    this.task = {
      title: '',
      category: '',
      priority: 'Medium',
      completed: false
    };
  }
}
