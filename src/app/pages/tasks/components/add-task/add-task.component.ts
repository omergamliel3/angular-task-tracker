import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/core/models/task.model';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
    @ViewChild('form')
    addTaskForm: NgForm;

    // tslint:disable-next-line:no-output-on-prefix
    @Output()
    onAddTask = new EventEmitter<Task>();

    onSubmit(): void {
        if (!this.addTaskForm.valid) {
            return;
        }
        const {text, day, reminder} = this.addTaskForm.value;
        const newTask: Task = {text, day, reminder};
        this.onAddTask.emit(newTask);
    }

}
