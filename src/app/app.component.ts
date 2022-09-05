import {Component, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngCalendar';

  selected: Date = new Date();



  date = new FormControl(new Date());


  onInput(date: Date)  {
    this.selected = new Date(date);
    console.log(this.selected)
  }

}
