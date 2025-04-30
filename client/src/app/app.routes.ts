import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'create', component: TaskFormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'edit/:id', component: TaskEditComponent },
    { path: 'register', component: RegisterComponent }
];