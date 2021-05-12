import { Component, Input, EventEmitter, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/core/models/task.model';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
    @Input() task: Task;
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onDeleteTask = new EventEmitter<Task>();
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onToggleReminder = new EventEmitter<Task>();

    faTimes = faTimes;

    deleteTask(): void {
        this.onDeleteTask.emit(this.task);
    }

    toggleReminder(): void {
        this.onToggleReminder.emit(this.task);
    }

}
