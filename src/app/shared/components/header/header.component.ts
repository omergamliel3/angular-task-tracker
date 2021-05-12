import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../../../core/services/ui.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public readonly title = 'Tasks Tracker';

    constructor(private router: Router,
                private uiService: UiService) {
    }

    toggleAddTask(): void {
        this.uiService.toggleAddTask();
    }

    navigateToHomePage(): void {
        this.router.navigate(['/']).then();
    }

    onReload(): void {
        window.location.reload();
    }

}
