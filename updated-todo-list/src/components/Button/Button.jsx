import './Button.css';
import React from 'react';
import { faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Button({ icon, text, onClick }) {
  const getIcon = () => {
    if (icon === 'plus') {
      return <FontAwesomeIcon className="buttonPlus" icon={faPlus} />;
    }
    if (icon === 'pencil') {
      return <FontAwesomeIcon className="buttonPencil" icon={faPencil} />;
    }
    return null;
  };

  const getText = () => <p className="buttonText">{text}</p>;

  function clickHandler() {
    onClick();
  }

  return (
    <div className="buttonContainer">
      <button className="commonbutton" data-testid="createButton" type="submit" onClick={clickHandler}>
        {getIcon()}
        {getText()}
      </button>
    </div>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
