import React, { useContext } from 'react';
import styled from 'styled-components';
import Item from '../components/Item';
import { TaskContext } from '../contexts/taskContext';
import ShowPage from '../styles/ShowPage';
import deleteIcon from '../assets/delete.svg';

const Completed = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <ShowPage>
      {tasks &&
        tasks.map((item) => (
          <Item key={item.id} item={item} deleteBtn={true} />
        ))}
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          fill="rgb(255,255,255)"
        >
          <path d="M6.5 17q-.625 0-1.062-.438Q5 16.125 5 15.5v-10H4V4h4V3h4v1h4v1.5h-1v10q0 .625-.438 1.062Q14.125 17 13.5 17Zm7-11.5h-7v10h7ZM8 14h1.5V7H8Zm2.5 0H12V7h-1.5Zm-4-8.5v10Z" />
        </svg>
        delete all
      </Button>
    </ShowPage>
  );
};

export default Completed;

const Button = styled.button`
  background-color: rgba(235, 87, 87, 1);
  border: none;
  color: white;
  width: 125px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
  border-radius: 4px;

  & > div {
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
