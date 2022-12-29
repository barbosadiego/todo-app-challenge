import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TaskContextProvider } from './contexts/taskContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskContextProvider>
  </React.StrictMode>,
);
