import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    const now = Date.now();

    const durationHours = (now - value.getTime()) / 1000 / 60 / 60;
    const durationDays = (now - value.getTime()) / 1000 / 60 / 60 / 24;

    if (Math.round(durationDays) >= 365) {
      return `${Math.round(durationDays / 365)}y ago`;
    } else if (Math.round(durationDays) >= 30) {
      return `${Math.round(durationDays / 30)}mo ago`;
    } else if (Math.round(durationDays) >= 7) {
      return `${Math.round(durationDays / 7)}w ago`;
    } else if (durationHours >= 12) {
      return `${Math.round(durationDays)}d ago`;
    } else if (durationHours > 0.5) {
      return `${Math.round(durationHours)}h ago`;
    } else {
      return 'now';
    }
  }
}
