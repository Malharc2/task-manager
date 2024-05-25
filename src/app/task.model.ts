// task.model.ts

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  recurring: boolean;
  frequency?: 'daily' | 'weekly' | 'monthly';
  completed: boolean; // Add the completed property
}
