import React, { useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';
import deleteIcon from '../assets/delete.svg';

const Item = ({ item, deleteBtn = false }) => {
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
      <div>
        <input
          type="checkbox"
          name={item.id}
          id={item.id}
          onClick={(e) => handleClick(e)}
          checked={item.completed}
          readOnly
        />
        <label htmlFor={item.id}>{item.title}</label>
      </div>
      {deleteBtn && (
        <Button>
          <img src={deleteIcon} alt="delete Button" />
        </Button>
      )}
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  & > div {
    gap: 5px;
    display: flex;
    align-items: center;
  }

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

const Button = styled.button`
  cursor: pointer;
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;

  img {
    max-width: 100%;
  }
`;
