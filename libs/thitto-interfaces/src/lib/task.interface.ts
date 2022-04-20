import { ProjectDetail } from "./project.interface";

export interface TaskDetail {
    id: string;
    title: string,
    desc: string,
    status: TaskStatus,
    priority: TaskPriority,
    assignee: string;
    project: ProjectDetail;
}

export enum TaskStatus {
    BACKLOG = 'backlog',
    READY_TO_START = 'readyToStart',
    IN_PROGRESS = 'inProgress',
    COMPLETED = 'completed'
}

export enum TaskPriority {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low'
}