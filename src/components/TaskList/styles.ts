import styled from 'styled-components';

type IContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: IContainerProps) => `
display: flex;
background-color: #20212c;
padding: 5px;
gap: 1rem;
border-radius: 5px;
margin-bottom: 10px;
align-items: center;

label {
  color: #ccc;
  text-decoration: ${done ? 'line-through' : 'initial'};
}

input {
  width: 25px;
  height: 25px;
}
`
);
