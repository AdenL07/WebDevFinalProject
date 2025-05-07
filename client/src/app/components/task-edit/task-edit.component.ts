import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Task } from '../../interfaces/task';

@Component({
  standalone: true,
  selector: 'app-task-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  taskId!: string;
  task: Task = {
    title: '',
    category: '',
    priority: 'Medium',
    completed: false
  };

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id')!;
    this.api.getTaskById(this.taskId).subscribe({
      next: (data) => this.task = data,
      error: (err) => console.error('Error loading task:', err)
    });
  }

  updateTask() {
    this.api.updateTask(this.taskId, this.task).subscribe({
      next: () => {
        alert('Task updated successfully!');
        this.router.navigate(['/tasks']);
      },
      error: (err) => console.error('Error updating task:', err)
    });
  }
}
