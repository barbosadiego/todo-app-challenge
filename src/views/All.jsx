import React, { useContext } from 'react';
import Input from '../components/Input';
import { TaskContext } from '../contexts/taskContext';
import ShowPage from '../styles/ShowPage';

const All = () => {
  const { initialTasks } = useContext(TaskContext);
  console.log(initialTasks);

  return (
    <ShowPage>
      <Input />
    </ShowPage>
  );
};

export default All;
