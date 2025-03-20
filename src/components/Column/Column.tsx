import React from 'react';
import { Column as ColumnType } from '../../types/kanban.types';

import styles from './Column.module.css';
import { TaskCard } from '../TaskCard/TaskCard';

interface ColumnProps {
  column: ColumnType;
}

export const Column: React.FC<ColumnProps> = ({ column }: ColumnProps) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h2 className={styles.title}>{column.title}</h2>
        <span className={styles.counter}>{column.tasks.length}</span>
      </div>
      <div className={styles.taskList}>
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <button className={styles.addButton}>
        <span className={styles.addIcon}>+</span>
        <span>Add a Todo</span>
      </button>
    </div>
  );
};
