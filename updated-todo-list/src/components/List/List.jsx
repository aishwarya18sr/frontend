/* eslint-disable max-len */
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button';
import { LISTS_ROUTE } from '../../constants/routes';
import './List.css';
import makeRequest from '../../utils/makeRequest';
import { LIST_URL } from '../../constants/apiEndPoints';

function List() {
  const navigate = useNavigate();
  const [isListDataLoaded, setIsListDataLoaded] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    if (!isListDataLoaded) {
      makeRequest(LIST_URL).then((response) => { setListData(response.toDoList); });
      setIsListDataLoaded(true);
    }
  }, [listData]);

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

export default List;
