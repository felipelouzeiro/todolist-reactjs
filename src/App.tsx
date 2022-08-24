import { useState } from 'react';
import * as C from './App.styles';
import { AddTask } from './components/addTask';
import { TaskList } from './components/TaskList';
import { Task } from './types/tasks';

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([
    { id: 1, name: 'Listar tarefas existentes', done: true },
    { id: 2, name: 'Criar nova tarefa', done: false },
    { id: 3, name: 'Concluir alguma tarefa', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newTaskList = [...taskList];
    newTaskList.push({
      id: taskList.length + 1,
      name: taskName,
      done: false,
    });
    setTaskList(newTaskList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    let newTaskList = [...taskList];

    for (let i in newTaskList) {
      if (newTaskList[i].id === id) {
        newTaskList[i].done = done;
      }
    }
    setTaskList(newTaskList);
  };

  return (
    <C.Container>
      <C.Content>
        <C.Header>Lista de Tarefas</C.Header>
        <AddTask onSubmit={handleAddTask} />
        {taskList.map((task, index) => (
          <TaskList key={index} task={task} onChange={handleTaskChange} />
        ))}
      </C.Content>
    </C.Container>
  );
};
