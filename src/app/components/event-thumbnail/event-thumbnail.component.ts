import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
  <div [ngSwitch]="event?.time">
    Time: {{event?.time}}
  </div>
  <div>Price: \${{event?.price}}</div>
  <div *ngIf="event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
  </div>
  <div *ngIf="event?.onlineUrl">
    Online URL: {{event?.onlineUrl}}
  </div>
</div>
  `,
  // styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  constructor() { }

  ngOnInit() {
  }

}
