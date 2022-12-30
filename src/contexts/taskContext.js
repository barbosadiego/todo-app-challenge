import { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  function saveData(data) {
    localStorage.setItem('todos', JSON.stringify(data));
  }

  function getData() {
    return JSON.parse(localStorage.getItem('todos'));
  }

  useEffect(() => {
    setTasks(getData());
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, saveData }}>
      {children}
    </TaskContext.Provider>
  );
};
