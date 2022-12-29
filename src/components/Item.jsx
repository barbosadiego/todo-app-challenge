import React, { useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const Item = ({ item }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  function handleClick(e) {
    const id = e.target.id;
    const tempTasks = tasks.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setTasks(tempTasks);
  }

  return (
    <StyledItem>
      <input
        type="checkbox"
        name={item.id}
        id={item.id}
        onClick={(e) => handleClick(e)}
        checked={item.completed}
        readOnly
      />
      <label htmlFor={item.id}>{item.title}</label>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;

  input[type='checkbox'] {
    width: 24px;
    height: 24px;
    display: block;

    &:checked + label {
      text-decoration: line-through;
    }
  }

  label {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    line-height: 22px;
  }
`;
