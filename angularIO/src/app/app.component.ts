import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a-button [action]="actions.default" (onClick)='actions.default.action($event)'></a-button>
    <a-button [action]="actions.alt"  (onClick)='actions.default.action($event)'></a-button>
  `,
  styles: []
})
export class AppComponent {
  title = 'angularIO';
  actions = {
    default: {
      text:'default',
      action: (e) => console.log(e,123)
    },
    alt: {
      text: 'alt',
      type: 'is-alt',
      html: 'a',
      link: '#2342'
    }
  }
}
