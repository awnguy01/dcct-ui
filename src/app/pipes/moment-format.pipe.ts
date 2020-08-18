import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment, ISO_8601 } from 'moment';

@Pipe({
  name: 'momentFormat',
})
export class MomentFormatPipe implements PipeTransform {
  transform(potentialDateTime: string, format: string): string {
    const convertedMoment: Moment = moment(potentialDateTime, ISO_8601, true);
    if (convertedMoment.isValid()) {
      return convertedMoment.format(format);
    }
    return potentialDateTime;
  }
}
