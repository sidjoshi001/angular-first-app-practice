import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'first-app';

  constructor(@Inject(DOCUMENT) private document: Document) {


    console.log('Hello');

    console.log(document.location.hostname);

  }

}
