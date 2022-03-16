import './TaskItem.css';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { LISTS_ROUTE, TASKS_ROUTE } from '../../constants/routes';
import Icon from '../Icon/Icon';

function TaskItem({
  id, text,
}) {
  const navigate = useNavigate();
  const { listId } = useParams();
  return (
    <div className="taskItem">
      <p className="taskItemText">
        {text}
      </p>
      <Icon
        className="taskItemIcon"
        icon="pencil"
        onClick={() => {
          navigate(`${LISTS_ROUTE}/${listId}${TASKS_ROUTE}/${id}/update`);
        }}
      />
    </div>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default TaskItem;
