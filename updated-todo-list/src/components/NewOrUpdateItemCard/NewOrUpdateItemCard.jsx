import {useState} from 'react';
import './NewOrUpdateItemCard.css';

const NewOrUpdateItemCard = ({title, initialValue, submitClickHandler, cancelClickHandler}) => {

    const [itemName, setItemName] = useState(initialValue);
    

    const inputHandler = (event) => {
        setItemName(event.target.value);
    }

    const cardSubmitClickHandler = (event) => {
        submitClickHandler(itemName);
    }

    const cardCancelClickHandler = (event) => {
        cancelClickHandler();
    }

    return (
        <div className="newOrUpdateItemCard">  
            <div className='itemInputFields'>     
                <p data-testid="itemTitle" className="itemTitle">{title}</p>
                <input data-testid="itemName" className="itemName" type="text" value={itemName} onChange={inputHandler}></input>
                <div className="itemButtonContainer">
                    <button data-testid="itemSubmitButton" className="itemSubmit" onClick={cardSubmitClickHandler}>Submit</button>
                    <button data-testid="itemCancelButton" className="itemCancel" onClick={cardCancelClickHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default NewOrUpdateItemCard;