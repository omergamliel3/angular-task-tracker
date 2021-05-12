import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
    declarations: [HeaderComponent, LoadingSpinnerComponent, ButtonComponent],
    imports: [CommonModule],
    exports: [CommonModule, HeaderComponent, LoadingSpinnerComponent, ButtonComponent]
})
export class SharedModule {
}