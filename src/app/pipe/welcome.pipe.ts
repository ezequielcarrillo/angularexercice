import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return 'Welcome Awesome ' + value ;
  }

}
