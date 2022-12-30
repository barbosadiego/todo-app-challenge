import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const Input = () => {
  const { tasks, setTasks, saveData } = useContext(TaskContext);
  const [item, setItem] = useState('');
  const inputRef = useRef();
  if (inputRef.current) inputRef.current.focus();

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const taskItem = [
      ...tasks,
      {
        id: Date.now(),
        title: item,
        completed: false,
      },
    ];
    setTasks(taskItem);
    saveData(taskItem);
    setItem('');
  }

  return (
    <StyledInput onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add details"
        onChange={handleChange}
        value={item}
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.form`
  display: flex;
  gap: 25px;
  margin-bottom: 33px;

  input {
    flex: 1;
    min-width: 150px;
    height: 60px;
    border: 1px solid rgba(189, 189, 189, 1);
    border-radius: 12px;
    outline: none;
    padding: 12px;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    width: 100px;
    border: none;
    background-color: rgba(47, 128, 237, 1);
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    line-height: 17px;
    border-radius: 12px;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  }
`;
