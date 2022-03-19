import { useNavigate } from 'react-router-dom';
import React from 'react';
import NewOrUpdateItemCard from '../../components/NewOrUpdateItemCard/NewOrUpdateItemCard';
import { LISTS_ROUTE } from '../../constants/routes';
import makeRequest from '../../utils/makeRequest/makeRequest';
import { CREATE_NEW_LIST_URL } from '../../constants/apiEndPoints';

function CreateList() {
  const navigate = useNavigate();

  const addListHandler = async (listName) => {
    await makeRequest(CREATE_NEW_LIST_URL, { data: { name: listName } });
    navigate(`${LISTS_ROUTE}`, { replace: true });
  };

  const cancelClickHandler = () => {
    navigate(-1);
  };

  return (
    <NewOrUpdateItemCard title="Add List" submitClickHandler={addListHandler} cancelClickHandler={cancelClickHandler} />
  );
}

export default CreateList;
