import { Component, Input, OnInit } from '@angular/core';
import { TaskDetail } from '@thitto/thitto-interfaces';

@Component({
  selector: 'thitto-task-card',
  template: `
  <div cdkDrag *ngIf="task"
      class="w-52 h-40 flex flex-col justify-between cursor-move dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 py-5 px-4 mb-3"
    >
      <div>
        <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {{ task.title }}
        </h4>
        <p class="text-gray-800 dark:text-gray-100 text-sm">{{ task.desc }}</p>
      </div>
      <div>
        <div
          class="flex items-center justify-between text-gray-800 dark:text-gray-100"
        >
          {{ task.priority }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {

  @Input() task: TaskDetail | null = null;
  constructor() {}

  ngOnInit(): void {}
}
