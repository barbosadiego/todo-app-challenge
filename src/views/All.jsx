import React, { useContext } from 'react';
import Input from '../components/Input';
import Item from '../components/Item';
import { TaskContext } from '../contexts/taskContext';
import ShowPage from '../styles/ShowPage';

const All = () => {
  const { initialTasks } = useContext(TaskContext);
  console.log(initialTasks);
  // console.log(Date.now());

  return (
    <ShowPage>
      <Input />
      {initialTasks.length &&
        initialTasks.map((item) => (
          <Item key={item.id} description={item.title} id={item.id} />
        ))}
    </ShowPage>
  );
};

export default All;
