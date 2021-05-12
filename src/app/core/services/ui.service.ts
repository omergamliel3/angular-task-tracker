import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    private showAddTaskForm$ = new BehaviorSubject<boolean>(false);
    public onToggleAddTaskForm = this.showAddTaskForm$.asObservable();

    toggleAddTask(): void {
        this.showAddTaskForm$.next(!this.showAddTaskForm$.value);
    }
}
