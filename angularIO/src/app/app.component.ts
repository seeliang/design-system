import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a-button [text]="actions.default.text" (onClick)='actions.default.action($event)'></a-button>
    <a-button [text]="actions.alt.text" [type]='actions.alt.type' (onClick)='actions.default.action($event)'></a-button>
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
      type: 'is-alt'
    }
  }
}
