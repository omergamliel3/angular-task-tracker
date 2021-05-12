import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';

const routes: Routes = [
    {path: '', redirectTo: 'tasks', pathMatch: 'full'},
    {
        path: 'tasks',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/tasks/tasks.module')
            .then((({TasksModule}) => TasksModule))
    },
    {
        path: 'about',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/about/about.module')
            .then(({AboutModule}) => AboutModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
