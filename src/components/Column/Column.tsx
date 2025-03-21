import React, { useState } from 'react';
import { Column as ColumnType } from '../../types/kanban.types';

import styles from './Column.module.css';
import { TaskCard } from '../TaskCard/TaskCard';

interface ColumnProps {
  column: ColumnType;
  onAddTask?: (title: string) => void;
}

export const Column: React.FC<ColumnProps> = ({ column, onAddTask }: ColumnProps) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddClick = () => {
    setIsAddingTask(true);
  };

  const handleCancelAdd = () => {
    setIsAddingTask(false);
    setNewTaskTitle('');
  };

  const handleSubmitTask = () => {
    if (newTaskTitle.trim() !== '' && onAddTask) {
      onAddTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmitTask();
    } else if (e.key === 'Escape') {
      handleCancelAdd();
    }
  };

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

      {isAddingTask ? (
        <div className={styles.addTaskContainer}>
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="할 일을 입력하세요..."
            className={styles.taskInput}
            autoFocus
            aria-label="새 작업 입력"
            tabIndex={0}
          />
          <div className={styles.addTaskActions}>
            <button
              onClick={handleSubmitTask}
              className={styles.addTaskButton}
              aria-label="작업 추가"
              tabIndex={0}
            >
              추가
            </button>
            <button
              onClick={handleCancelAdd}
              className={styles.cancelButton}
              aria-label="취소"
              tabIndex={0}
            >
              취소
            </button>
          </div>
        </div>
      ) : (
        <button
          className={styles.addButton}
          onClick={handleAddClick}
          aria-label="Todo 추가하기"
          tabIndex={0}
        >
          <span className={styles.addIcon}>+</span>
          <span>Add a Todo</span>
        </button>
      )}
    </div>
  );
};
