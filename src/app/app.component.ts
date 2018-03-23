import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <app-event-list></app-event-list>
  `,
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
