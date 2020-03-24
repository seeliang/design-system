import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a-button',
  template: `
    <button class="a-button" [ngClass]="type" (click)="onClick.emit($event)">{{ text }}</button>
  `,
  styleUrls: ['./button.scss']
})
export class Button {
  @Input()
  text = '';
  @Input()
  type = '';

  @Output()
  onClick = new EventEmitter<any>();
}