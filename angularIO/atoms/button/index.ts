import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a-button',
  template: `
  <ng-container [ngSwitch]="action?.html">
    <a *ngSwitchCase="'a'" class="a-button" [ngClass]="action?.type" href="{{action?.link}}">{{ action?.text }}</a>
    <button *ngSwitchDefault class="a-button" [ngClass]="action?.type" (click)="onClick.emit($event)">{{ action?.text }}</button>
  </ng-container>
    `,
  styleUrls: ['./button.scss']
})
export class Button {
  @Input()
  action = {
    text:'',
    type: '',
    html: '',
    link: ''
  }

  @Output()
  onClick = new EventEmitter<any>();
}