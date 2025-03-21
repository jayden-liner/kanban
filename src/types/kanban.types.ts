export interface Task {
  id: string;
  title: string;
  createdAt: Date;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
