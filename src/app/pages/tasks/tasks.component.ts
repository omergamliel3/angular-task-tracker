import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import { UiService } from '../../core/services/ui.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
    tasks: Task[];
    loading = false;
    error: any;
    showAddTaskForm: boolean;
    private destroy$ = new Subject<void>();

    constructor(private taskService: TaskService,
                private uiService: UiService,
                public authService: AuthService) {
    }

    ngOnInit(): void {
        this.getTasks();
        this.listenToAddTaskFormToggles();
    }

    listenToAddTaskFormToggles(): void {
        this.uiService.onToggleAddTaskForm
            .pipe(takeUntil(this.destroy$), distinctUntilChanged())
            .subscribe((value => {
                this.showAddTaskForm = value;
            }));
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    getTasks(): void {
        this.loading = true;
        this.taskService.getTasks().pipe(takeUntil(this.destroy$))
            .subscribe(tasks => {
                    this.tasks = tasks;
                    this.loading = false;
                },
                error => {
                    this.error = error;
                });
    }

    addTask(task: Task): void {
        this.taskService.addTask(task).pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                    this.tasks.push(task);
                },
                (error) => {
                    console.log('Failed to add new Task');
                });
    }

    deleteTask(task: Task): void {
        this.taskService.deleteTask(task).pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                    // show deleted indication (toast?)
                    this.tasks = this.tasks.filter((t) => t.id !== task.id);
                },
                (error) => {
                    // show failed to delete indication (toast?)
                    console.log(`Failed to remove task with an id ${task.id}`);
                });
    }

    toggleReminder(task: Task): void {
        this.taskService.toggleTaskReminder(task).pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                task.reminder = !task.reminder;
            });
    }
}
