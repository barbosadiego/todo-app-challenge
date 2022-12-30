import React, { useContext } from 'react';
import Input from '../components/Input';
import Item from '../components/Item';
import { TaskContext } from '../contexts/taskContext';
import ShowPage from '../styles/ShowPage';

const Active = () => {
  const { tasks } = useContext(TaskContext);
  const activeTasks = tasks.filter((item) => !item.completed);

  return (
    <ShowPage>
      <Input />
      {activeTasks.length > 0 &&
        activeTasks.map((item) => <Item key={item.id} item={item} />)}
    </ShowPage>
  );
};

export default Active;
