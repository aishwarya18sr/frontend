import './Icon.css';
import React from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Icon({ icon, onClick }) {
  const getIcon = () => {
    if (icon === 'pencil') {
      return <FontAwesomeIcon data-testid="pencilIcon" className="buttonPencil" icon={faPencil} />;
    }
    return null;
  };

  const clickHandler = () => {
    onClick();
  };

  return (
    <div className="iconContainer">
      <button className="commonIcon" data-testid="editIcon" type="submit" onClick={clickHandler}>{getIcon()}</button>
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Icon;
