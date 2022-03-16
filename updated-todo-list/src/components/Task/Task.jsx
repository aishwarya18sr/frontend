/* eslint-disable max-len */
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem/TaskItem';
import Button from '../Button/Button';
import { LISTS_ROUTE, TASKS_ROUTE } from '../../constants/routes';
import './Task.css';

function Task({ listData }) {
  const navigate = useNavigate();
  const { listId } = useParams();
  const allTasks = listData[listId - 1].tasks.map((eachTask) => <TaskItem key={eachTask.id} id={eachTask.id} text={eachTask.name} />);

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
        <p className="taskText">{listData[listId - 1].listName}</p>
        <div className="taskItemContainer">
          {allTasks}
        </div>
      </main>
    </div>
  );
}

Task.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    listName: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default Task;
