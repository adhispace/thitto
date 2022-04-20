import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { TaskDetail, TaskStatus } from '@thitto/thitto-interfaces';

@Pipe({
  name: 'tasksByStatus'
})
export class TasksByStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
      console.log(value);
      console.log(args);
  }
}

@Component({
  selector: 'thitto-task-list',
  template: `
    <div *ngFor="let status of taskStatus" class="mx-auto container py-20 px-6 flex flex-row justify-around">
      <div
        class="bg-gray-300 w-56 flex flex-col items-center p-5"
        cdkDropList
        #backlogList="cdkDropList"
        [cdkDropListData]="tasks"
        (cdkDropListDropped)="drop($event)"
      >
        <thitto-task-card
          *ngFor="let task of tasks"
          [task]="task"
          cdkDrag
        ></thitto-task-card>
      </div>
    </div>
  `,
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks: TaskDetail[] = [];
  taskStatus = Object.keys(TaskStatus);

  constructor() {}

  ngOnInit(): void {}

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
