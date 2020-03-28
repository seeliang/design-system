import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'a-button',
  templateUrl: 'button.html',
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