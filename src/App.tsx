import { useState } from 'react';
import * as C from './App.styles';
import { AddTask } from './components/addTask';
import { TaskList } from './components/TaskList';
import { Task } from './types/tasks';

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, name: 'Preparar mochila', done: false },
    { id: 2, name: 'Fazer atividades', done: true },
    { id: 3, name: 'Regar plantas', done: false },
  ]);

  return (
    <C.Container>
      <C.Content>
        <C.Header>Lista de Tarefas</C.Header>
        {taskList.map((task, index) => (
          <TaskList key={index} task={task} />
        ))}
      </C.Content>
    </C.Container>
  );
};
