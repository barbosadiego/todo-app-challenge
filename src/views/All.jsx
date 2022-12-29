import React, { useContext } from 'react';
import Input from '../components/Input';
import Item from '../components/Item';
import { TaskContext } from '../contexts/taskContext';
import ShowPage from '../styles/ShowPage';

const All = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <ShowPage>
      <Input />
      {tasks.length > 0 &&
        tasks.map((item) => <Item key={item.id} item={item} />)}
    </ShowPage>
  );
};

export default All;
