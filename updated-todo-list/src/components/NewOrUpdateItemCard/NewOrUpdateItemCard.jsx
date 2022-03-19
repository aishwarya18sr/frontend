import React, { useEffect, useState } from 'react';
import './NewOrUpdateItemCard.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest/makeRequest';
import { getTaskUrl } from '../../constants/apiEndPoints';

function NewOrUpdateItemCard({
  title, oldTask, submitClickHandler, cancelClickHandler,
}) {
  const [itemName, setItemName] = useState('');

  const loadOldTaskTitle = (response) => {
    const requiredTask = response.toDoTask.filter((eachTask) => eachTask.id === oldTask.taskId);
    setItemName(requiredTask[0].name);
  };

  useEffect(() => {
    if (title === 'Update Task') {
      makeRequest(getTaskUrl(oldTask.listId)).then((response) => {
        loadOldTaskTitle(response);
      });
    }
  }, []);

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
  oldTask: PropTypes.shape({
    listId: PropTypes.number,
    taskId: PropTypes.number,
  }),
  submitClickHandler: PropTypes.func.isRequired,
  cancelClickHandler: PropTypes.func.isRequired,
};

NewOrUpdateItemCard.defaultProps = {
  oldTask: {},
};

export default NewOrUpdateItemCard;
