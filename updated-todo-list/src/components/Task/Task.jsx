/* eslint-disable max-len */
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import Button from '../Button/Button';
import { LISTS_ROUTE, TASKS_ROUTE } from '../../constants/routes';
import './Task.css';
import { getTaskUrl } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

function Task() {
  const navigate = useNavigate();
  const { listId } = useParams();
  const [isTaskDataLoaded, setIsTaskDataLoaded] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [listTitle, setListTitle] = useState('');

  useEffect(() => {
    const loadTaskData = (response) => {
      setListTitle(response.toDoTask[0].listName);
      setTaskData(response.toDoTask[0].Tasks);
    };

    if (!isTaskDataLoaded) {
      const taskUrl = getTaskUrl(listId);
      makeRequest(taskUrl).then((res) => { loadTaskData(res); });
      setIsTaskDataLoaded(true);
    }
  }, [isTaskDataLoaded]);

  return (
    <div className="taskContainer">
      <div className="taskButton">
        <Button
          icon="plus"
          text="CREATE TASK"
          onClick={() => {
            navigate(`${LISTS_ROUTE}/${listId}${TASKS_ROUTE}/create`);
          }}
        />
      </div>
      <main className="taskMain">
        <p className="taskText">{listTitle}</p>
        <div className="taskItemContainer">
          {(taskData.length !== 0) ? taskData.map((eachTask) => <TaskItem key={eachTask.id} id={eachTask.id} text={eachTask.name} />) : <p />}
        </div>
      </main>
    </div>
  );
}

export default Task;
