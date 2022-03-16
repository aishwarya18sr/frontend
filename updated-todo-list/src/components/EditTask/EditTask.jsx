import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import '../NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import PropTypes from 'prop-types';
import { LISTS_ROUTE } from '../../constants/routes';
import NewOrUpdateItemCard from '../NewOrUpdateItemCard/NewOrUpdateItemCard';

function EditTask({ listData, setListData }) {
  const navigate = useNavigate();

  let { listId, taskId } = useParams();
  listId = parseInt(listId, 10);
  taskId = parseInt(taskId, 10);

  const initialTaskName = listData[listId - 1].tasks[taskId - 1].name;

  const editTaskItemHandler = (taskName) => {
    const modifiedList = listData.map((eachList) => {
      if (eachList.id !== listId) {
        return eachList;
      }

      const modifiedListItem = {};
      modifiedListItem.id = eachList.id;
      modifiedListItem.listName = eachList.listName;
      const modifiedTasks = eachList.tasks.map((eachTask) => {
        if (eachTask.id !== taskId) {
          return eachTask;
        }

        const modifiedTask = {
          id: taskId,
          name: taskName,
        };
        return modifiedTask;
      });
      modifiedListItem.tasks = modifiedTasks;
      return modifiedListItem;
    });
    setListData(() => modifiedList);
    navigate(`${LISTS_ROUTE}/${listId}`, { replace: true });
  };

  const cancelClickHandler = () => {
    navigate(-1);
  };

  return (
    <NewOrUpdateItemCard title="Update Task" initialValue={initialTaskName} submitClickHandler={editTaskItemHandler} cancelClickHandler={cancelClickHandler} />
  );
}

EditTask.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    listName: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })),
  })).isRequired,
  setListData: PropTypes.func.isRequired,
};

export default EditTask;
