import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a-button [text]="actionText" (onClick)='actionCall($event)'></a-button>
  `,
  styles: []
})
export class AppComponent {
  title = 'angularIO';
  actionText = 'abc';
  actionCall = (e) => console.log(e,123);
}
