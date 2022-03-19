import { useNavigate, useParams } from 'react-router-dom';
import '../../components/NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import React from 'react';
import { LISTS_ROUTE } from '../../constants/routes';
import NewOrUpdateItemCard from '../../components/NewOrUpdateItemCard/NewOrUpdateItemCard';
import makeRequest from '../../utils/makeRequest/makeRequest';
import { CREATE_NEW_TASK_URL } from '../../constants/apiEndPoints';

function CreateTask() {
  const navigate = useNavigate();

  let { listId } = useParams();
  listId = parseInt(listId, 10);

  const createTaskItemHandler = async (taskName) => {
    await makeRequest(CREATE_NEW_TASK_URL(listId), { data: { name: taskName } });
    navigate(`${LISTS_ROUTE}/${listId}`, { replace: true });
  };

  const cancelClickHandler = () => {
    navigate(-1);
  };

  return (
    <NewOrUpdateItemCard title="Add Task" submitClickHandler={createTaskItemHandler} cancelClickHandler={cancelClickHandler} />
  );
}

export default CreateTask;
