import { Component, Input} from '@angular/core';

@Component({
  selector: 'm-search-form',
  templateUrl: 'search-form.html',
  styleUrls:['./search-form.scss']
})

export class SearchForm {
  
  @Input()
  actions = {
    default: {
      text:'search',
      action: (e) => {
        e.preventDefault(); 
        alert(`search for: ` + this.value)
      }
    },
  }

  @Input()
  value = '42'
 
  onType (e) {
    this.value = e.target.value
  }
}