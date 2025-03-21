import { Column } from './components/Column/Column';
import styles from './App.module.css';
import { useState } from 'react';
import { Task } from './types/kanban.types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: title,
      createdAt: new Date(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Liner Kanban</h1>
        </div>
        <div className={styles.board}>
          <Column column={{ id: '1', title: 'To Do', tasks }} onAddTask={handleAddTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
