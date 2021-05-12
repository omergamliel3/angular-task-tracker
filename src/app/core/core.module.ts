import { NgModule } from '@angular/core';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
    declarations: [TimeAgoPipe, EllipsisPipe],
    imports: [],
    exports: [TimeAgoPipe, EllipsisPipe]
})
export class CoreModule {
}
