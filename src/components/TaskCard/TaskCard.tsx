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
      <p className={styles.description}>{task.description}</p>
      {task.labels && task.labels.length > 0 && (
        <div className={styles.labelContainer}>
          {task.labels.map((label, index) => (
            <span key={index} className={styles.label}>
              {label}
            </span>
          ))}
        </div>
      )}
      <div className={styles.footer}>
        {task.dueDate && (
          <span className={styles.dateInfo}>
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
    </div>
  );
};
