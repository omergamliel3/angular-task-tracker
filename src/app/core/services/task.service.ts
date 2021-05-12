import { Task } from '../models/task.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) {
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(environment.apiUrl);
    }

    addTask(task: Task): Observable<Task> {
        return this.http.post<Task>(environment.apiUrl, task, httpOptions);
    }

    deleteTask(task: Task): Observable<void> {
        const url = `${environment.apiUrl}/${task.id}`;
        return this.http.delete<void>(url);
    }

    toggleTaskReminder(task: Task): Observable<Task> {
        const url = `${environment.apiUrl}/${task.id}`;
        const toggledTask: Task = {...task, reminder: !task.reminder};
        return this.http.put<Task>(url, toggledTask, httpOptions);
    }
}
