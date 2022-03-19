/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ListItem.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { LISTS_ROUTE } from '../../constants/routes';

function ListItem({ id, title }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`${LISTS_ROUTE}/${id}`);
  };
  return (
    <div data-testid="listItemCard" className="listItemCard" onClick={clickHandler}>
      <p data-testid="listItemText" className="listItemText">{title}</p>
    </div>
  );
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListItem;
