import { Task } from '../../types/tasks';
import * as C from './styles';

type ITaskListProps = {
  task: Task;
  onChange: (id: number, done: boolean) => void;
};
export const TaskList = ({ task, onChange }: ITaskListProps) => {
  return (
    <C.Container done={task.done}>
      <input
        type={'checkbox'}
        checked={task.done}
        onChange={(e) => onChange(task.id, e.target.checked)}
      />
      <label>{task.name}</label>
    </C.Container>
  );
};
