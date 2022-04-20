import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ProjectDetail, TaskDetail, TaskPriority, TaskStatus } from '@thitto/thitto-interfaces';

@Component({
  selector: 'thitto-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'thitto';


  tasks: TaskDetail[] = [
    {
      id: '1',
      title: 'task1',
      desc: 'task1 desc',
      status: TaskStatus.BACKLOG,
      priority: TaskPriority.LOW,
      assignee: '',
      project: {
        id: '1',
        title: 'project1'
      }
    },
    {
      id: '2',
      title: 'task2',
      desc: 'task2 desc',
      status: TaskStatus.BACKLOG,
      priority: TaskPriority.LOW,
      assignee: '',
      project: {
        id: '1',
        title: 'project1'
      }
    },
    {
      id: '3',
      title: 'task3',
      desc: 'task3 desc',
      status: TaskStatus.BACKLOG,
      priority: TaskPriority.LOW,
      assignee: '',
      project: {
        id: '1',
        title: 'project1'
      }
    },
    {
      id: '4',
      title: 'task4',
      desc: 'task4 desc',
      status: TaskStatus.READY_TO_START,
      priority: TaskPriority.HIGH,
      assignee: '',
      project: {
        id: '1',
        title: 'project1'
      }
    },
    {
      id: '5',
      title: 'task5',
      desc: 'task5 desc',
      status: TaskStatus.READY_TO_START,
      priority: TaskPriority.HIGH,
      assignee: '',
      project: {
        id: '1',
        title: 'project1'
      }
    },
    {
      id: '6',
      title: 'task6',
      desc: 'task6 desc',
      status: TaskStatus.READY_TO_START,
      priority: TaskPriority.HIGH,
      assignee: '',
      project: {
        id: '1',
        title: 'project1'
      }
    }, 
  ]

  projectList: ProjectDetail[] = [];


  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
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
