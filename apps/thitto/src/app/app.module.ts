import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskListModule } from '@thitto/task-list';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TaskListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
