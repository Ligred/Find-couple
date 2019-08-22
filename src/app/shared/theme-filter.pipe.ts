import { Pipe, PipeTransform } from '@angular/core';
import { Theme } from './theme';

@Pipe({
  name: 'themeFilter'
})
export class ThemeFilterPipe implements PipeTransform {

  transform(value: Theme[], str: string): Theme[] {
    if (!str) {
      return value;
    }
    return value.filter(theme => {
      return theme.description.toLowerCase().includes(str.toLowerCase());
    });
  }

}
