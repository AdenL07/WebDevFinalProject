import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  // auth
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  // tasks
  getTasks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks`, this.getAuthHeaders());
  }

  createTask(task: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks`, task, this.getAuthHeaders());
  }

  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}`, this.getAuthHeaders());
  }
  
  updateTask(taskId: string, updatedTask: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}`, updatedTask, this.getAuthHeaders());
  }

  getTaskById(taskId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/tasks/${taskId}`, this.getAuthHeaders());
  }

  // utils
  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` })
    };
  }
}
