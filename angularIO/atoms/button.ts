import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a-button',
  template: `
    <button class="a-button" [ngClass]="action.type" (click)="onClick.emit($event)">{{ action.text }}</button>
  `,
  styleUrls: ['./button.scss']
})
export class Button {
  @Input()
  action = {
    text:'',
    type: ''
  }

  @Output()
  onClick = new EventEmitter<any>();
}