import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
    declarations: [
        TasksComponent,
        TasksListComponent,
        TaskItemComponent,
        AddTaskComponent,
    ],
    imports: [
        TasksRoutingModule,
        FormsModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class TasksModule {
}
