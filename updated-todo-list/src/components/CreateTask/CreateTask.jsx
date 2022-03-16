import { useNavigate, useParams } from 'react-router-dom';
import '../NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import React from 'react';
import PropTypes from 'prop-types';
import { LISTS_ROUTE } from '../../constants/routes';
import NewOrUpdateItemCard from '../NewOrUpdateItemCard/NewOrUpdateItemCard';

function CreateTask({ listData, setListData }) {
  const navigate = useNavigate();

  let { listId } = useParams();
  listId = parseInt(listId, 10);

  const createTaskItemHandler = (taskName) => {
    const modifiedList = listData.map((eachList) => {
      if (eachList.id !== listId) {
        return eachList;
      }

      const modifiedListItem = {};
      modifiedListItem.id = eachList.id;
      modifiedListItem.listName = eachList.listName;
      const addedTask = {
        id: ((eachList.tasks.length === 0) ? 1 : eachList.tasks[eachList.tasks.length - 1].id + 1),
        name: taskName,
      };
      const modifiedTasks = [...eachList.tasks, addedTask];
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
    <NewOrUpdateItemCard title="Add Task" initialValue="" submitClickHandler={createTaskItemHandler} cancelClickHandler={cancelClickHandler} />
  );
}

CreateTask.propTypes = {
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

export default CreateTask;
