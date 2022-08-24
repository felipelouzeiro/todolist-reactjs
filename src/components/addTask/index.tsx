import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type IAddTaskProps = {
  onSubmit: (taskName: string) => void;
};

export const AddTask = ({ onSubmit }: IAddTaskProps) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
      onSubmit(inputText);

      setInputText('');
    }
  };

  return (
    <C.Container>
      <div className="image">📌</div>
      <input
        type={'text'}
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
};
