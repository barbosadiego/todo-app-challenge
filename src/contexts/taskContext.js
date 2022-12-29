import { createContext } from 'react';

const initialTasks = {};

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  return (
    <TaskContext.Provider value={{ initialTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
