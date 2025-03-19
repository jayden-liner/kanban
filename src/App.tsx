import { Column } from './components/Column/Column';
import styles from './App.module.css';

const TASK = [
  {
    id: '1',
    title: 'Task 1',
    createdAt: new Date(),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
];

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Liner Kanban</h1>
        </div>
        <div className={styles.board}>
          <Column column={{ id: '1', tasks: TASK, title: 'To Do' }} />
        </div>
      </div>
    </div>
  );
}

export default App;
