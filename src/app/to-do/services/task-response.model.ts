import { TASK_STATUS } from '../tasks-status.enum';

export interface Task {
  id: number;
  title: string;
  status: TASK_STATUS;
  date: string;
}
