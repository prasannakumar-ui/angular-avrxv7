import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  submitted;
ed(x){
    this.submitted = true;
    console.log(x)
  }

}
