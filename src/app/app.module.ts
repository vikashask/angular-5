import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  } from './todo-list/todo-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
