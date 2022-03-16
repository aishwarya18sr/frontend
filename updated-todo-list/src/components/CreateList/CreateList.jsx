import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import PropTypes from 'prop-types';
import { LISTS_ROUTE } from '../../constants/routes';
import NewOrUpdateItemCard from '../NewOrUpdateItemCard/NewOrUpdateItemCard';

function CreateList({ listData, setListData }) {
  const navigate = useNavigate();

  const addListHandler = (listName) => {
    const newListItem = {
      id: listData.length + 1,
      listName,
      tasks: [],
    };
    setListData((previousList) => [...previousList, newListItem]);
    navigate(`${LISTS_ROUTE}`, { replace: true });
  };

  const cancelClickHandler = () => {
    navigate(-1);
  };

  return (
    <NewOrUpdateItemCard title="Add List" initialValue="" submitClickHandler={addListHandler} cancelClickHandler={cancelClickHandler} />
  );
}

CreateList.propTypes = {
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

export default CreateList;
