import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis',
    pure: true
})
export class EllipsisPipe implements PipeTransform {

    transform(value: string, maxLength: number = 20): string {
        if (value.length > maxLength) {
            return value.slice(0, maxLength - 3) + '...';
        }
        return value;
    }
}
