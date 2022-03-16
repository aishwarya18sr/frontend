import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../components/List/List';
import Task from '../components/Task/Task';
import CreateList from '../components/CreateList/CreateList';
import CreateTask from '../components/CreateTask/CreateTask';
import EditTask from '../components/EditTask/EditTask';
import LISTS from '../constants/lists';
import { LISTS_ROUTE, TASKS_ROUTE } from '../constants/routes';

function App() {
  const [listData, setListData] = useState(LISTS);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={LISTS_ROUTE}
            element={<List listData={listData} />}
          />
          <Route
            path={`${LISTS_ROUTE}/create`}
            element={(
              <CreateList
                listData={listData}
                setListData={setListData}
              />
)}
          />
          <Route
            path={`${LISTS_ROUTE}/:listId`}
            element={<Task listData={listData} />}
          />
          <Route
            path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`}
            element={(
              <CreateTask
                listData={listData}
                setListData={setListData}
              />
)}
          />
          <Route
            path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId/update`}
            element={(
              <EditTask
                title="Update Task"
                listData={listData}
                setListData={setListData}
              />
)}
          />
          <Route path="*" element={<div>404 Error. Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
