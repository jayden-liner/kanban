import React from 'react';

import styles from './TaskCard.module.css';
import { Task } from '../../types/kanban.types';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div draggable className={styles.card}>
      <h3 className={styles.title}>{task.title}</h3>
      <div className={styles.footer}>
        <span className={styles.date}>{task.createdAt.toLocaleDateString()}</span>
      </div>
    </div>
  );
};
