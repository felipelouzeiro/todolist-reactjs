import { useState } from 'react';
import { Task } from '../../types/tasks';
import * as C from './styles';

type ITaskListProps = {
  task: Task;
};
export const TaskList = ({ task }: ITaskListProps) => {
  const [isChecked, setIsChecked] = useState(task.done);

  return (
    <C.Container done={isChecked}>
      <input
        type={'checkbox'}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{task.name}</label>
    </C.Container>
  );
};
