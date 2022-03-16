/* eslint-disable max-len */
import { useNavigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button';
import { LISTS_ROUTE } from '../../constants/routes';
import './List.css';

function List({ listData }) {
  const navigate = useNavigate();

  const getHeading = () => {
    if (listData.length === 0) {
      return <p data-testid="listHeading" className="listHeading">NO LISTS AVAILABLE</p>;
    }
    if (listData.length === 1) {
      return <p data-testid="listHeading" className="listHeading">AVAILABLE LIST</p>;
    }
    if (listData.length > 1) {
      return <p data-testid="listHeading" className="listHeading">AVAILABLE LISTS</p>;
    }
    return null;
  };

  const allLists = listData.map((eachList) => <ListItem key={eachList.id} id={eachList.id} title={eachList.listName} />);

  return (
    <div className="listContainer">
      <header className="listHeader">
        <Button
          icon="plus"
          text="CREATE LIST"
          onClick={() => {
            navigate(`${LISTS_ROUTE}/create`);
          }}
        />
      </header>
      <main>
        {getHeading()}
        <div className="listItemContainer">
          {allLists}
        </div>
      </main>
    </div>
  );
}

List.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    listName: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default List;
