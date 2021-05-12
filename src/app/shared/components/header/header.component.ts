import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../../core/services/ui.service';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();
    public readonly title = 'Tasks Tracker';
    showAddTaskForm: boolean;

    constructor(private router: Router,
                private uiService: UiService) {
    }

    ngOnInit(): void {
        this.listenToAddTaskFormToggles();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    toggleAddTask(): void {
        this.uiService.toggleAddTask();
    }

    listenToAddTaskFormToggles(): void {
        this.uiService.onToggleAddTaskForm
            .pipe(takeUntil(this.destroy$), distinctUntilChanged())
            .subscribe((value => {
                this.showAddTaskForm = value;
            }));
    }

    navigateToHomePage(): void {
        this.router.navigate(['/']).then();
    }

    onReload(): void {
        window.location.reload();
    }

}
