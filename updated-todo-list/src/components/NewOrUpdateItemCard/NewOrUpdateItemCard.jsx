import React, { useState } from 'react';
import './NewOrUpdateItemCard.css';
import PropTypes from 'prop-types';

function NewOrUpdateItemCard({
  title, initialValue, submitClickHandler, cancelClickHandler,
}) {
  const [itemName, setItemName] = useState(initialValue);

  const inputHandler = (event) => {
    setItemName(event.target.value);
  };

  const cardSubmitClickHandler = () => {
    submitClickHandler(itemName);
  };

  const cardCancelClickHandler = () => {
    cancelClickHandler();
  };

  return (
    <div className="newOrUpdateItemCard">
      <div className="itemInputFields">
        <p data-testid="itemTitle" className="itemTitle">{title}</p>
        <input data-testid="itemName" className="itemName" type="text" value={itemName} onChange={inputHandler} />
        <div className="itemButtonContainer">
          <button data-testid="itemSubmitButton" type="submit" className="itemSubmit" onClick={cardSubmitClickHandler}>Submit</button>
          <button data-testid="itemCancelButton" type="submit" className="itemCancel" onClick={cardCancelClickHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

NewOrUpdateItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  initialValue: PropTypes.string.isRequired,
  submitClickHandler: PropTypes.func.isRequired,
  cancelClickHandler: PropTypes.func.isRequired,
};

export default NewOrUpdateItemCard;
