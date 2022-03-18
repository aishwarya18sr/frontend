import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../components/List/List';
import Task from '../components/Task/Task';
import CreateList from '../components/CreateList/CreateList';
import CreateTask from '../components/CreateTask/CreateTask';
import EditTask from '../components/EditTask/EditTask';
import { LISTS_ROUTE, TASKS_ROUTE } from '../constants/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={LISTS_ROUTE}
            element={<List />}
          />
          <Route
            path={`${LISTS_ROUTE}/create`}
            element={(
              <CreateList />
)}
          />
          <Route
            path={`${LISTS_ROUTE}/:listId`}
            element={<Task />}
          />
          <Route
            path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`}
            element={(
              <CreateTask />
)}
          />
          <Route
            path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId/update`}
            element={(
              <EditTask />
)}
          />
          <Route path="*" element={<div>404 Error. Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
