import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent, TasksByStatusPipe } from './task-list/task-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskCardModule } from '@thitto/task-card';

@NgModule({
  imports: [CommonModule, DragDropModule, TaskCardModule],
  declarations: [TaskListComponent, TasksByStatusPipe],
  exports: [TaskListComponent, TasksByStatusPipe],
})
export class TaskListModule {}
