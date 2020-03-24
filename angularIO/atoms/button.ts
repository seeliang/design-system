import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a-button',
  template: `
    <button class="a-button" (click)="onClick.emit($event)">{{ text }}</button>
  `,
  styleUrls: ['./button.scss']
})
export class Button {
  @Input()
  text = '';

  @Output()
  onClick = new EventEmitter<any>();
}