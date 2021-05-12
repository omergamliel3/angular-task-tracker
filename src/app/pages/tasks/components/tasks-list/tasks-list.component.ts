import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
    @Input() tasks: Task[];
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onDeleteTask = new EventEmitter<Task>();
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onToggleReminder = new EventEmitter<Task>();

    deleteTask(task: Task): void {
        this.onDeleteTask.emit(task);
    }

    toggleReminder(task: Task): void {
        this.onToggleReminder.emit(task);
    }
}
