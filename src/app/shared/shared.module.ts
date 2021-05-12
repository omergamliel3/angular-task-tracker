import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent, LoadingSpinnerComponent, ButtonComponent, FooterComponent],
    imports: [CommonModule, RouterModule],
    exports: [CommonModule, HeaderComponent, LoadingSpinnerComponent, ButtonComponent, FooterComponent]
})
export class SharedModule {
}
