import List from '../components/List/List';
import Task from '../components/Task/Task';
import CreateList from '../components/CreateList/CreateList';
import CreateTask from '../components/CreateTask/CreateTask';
import EditTask from '../components/EditTask/EditTask';
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LISTS } from "../constants/lists";
import { LISTS_ROUTE, TASKS_ROUTE } from "../constants/routes";


function App() {

  const [listData, setListData] = useState(LISTS);

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route 
                  path={LISTS_ROUTE}
                  element={<List listData={listData}></List>}>
                </Route>
                <Route 
                  path={`${LISTS_ROUTE}/create`}
                  element={<CreateList listData={listData}
                   setListData={setListData}></CreateList>}>
                </Route>
                <Route 
                  path={`${LISTS_ROUTE}/:listId`}
                  element={<Task listData={listData}></Task>}>
                </Route>
                <Route 
                  path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/create`}
                  element={<CreateTask listData={listData}
                   setListData={setListData}></CreateTask>}>
                </Route>
                <Route 
                  path={`${LISTS_ROUTE}/:listId${TASKS_ROUTE}/:taskId/update`}
                  element={<EditTask title="Update Task" listData={listData}
                   setListData={setListData}></EditTask>}>
                </Route>
                <Route path="*" element={<div>404 Error. Page not found</div>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
