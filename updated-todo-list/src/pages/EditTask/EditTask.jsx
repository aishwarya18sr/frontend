import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import '../../components/NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import { LISTS_ROUTE } from '../../constants/routes';
import NewOrUpdateItemCard from '../../components/NewOrUpdateItemCard/NewOrUpdateItemCard';
import makeRequest from '../../utils/makeRequest/makeRequest';
import { EDIT_TASK_URL } from '../../constants/apiEndPoints';

function EditTask() {
  const navigate = useNavigate();

  let { listId, taskId } = useParams();
  listId = parseInt(listId, 10);
  taskId = parseInt(taskId, 10);

  const editTaskItemHandler = async (taskName) => {
    await makeRequest(EDIT_TASK_URL(taskId), { data: { name: taskName } });
    navigate(`${LISTS_ROUTE}/${listId}`, { replace: true });
  };

  const cancelClickHandler = () => {
    navigate(-1);
  };

  return (
    <NewOrUpdateItemCard title="Update Task" oldTask={{ listId, taskId }} submitClickHandler={editTaskItemHandler} cancelClickHandler={cancelClickHandler} />
  );
}

export default EditTask;
