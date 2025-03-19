export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  dueDate?: Date;
  labels?: string[];
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  title: string;
  columns: Column[];
}
