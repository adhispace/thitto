import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TaskCardComponent],
  exports: [TaskCardComponent],
})
export class TaskCardModule {}
