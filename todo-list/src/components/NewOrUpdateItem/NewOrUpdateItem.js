import {useState} from 'react';
import Button from '../Button/Button'
import './NewOrUpdateItem.css';

const NewOrUpdateItem = (props) => {
    const [itemName, setItemName] = useState(props.initialItemValue);

    const inputHandler = (event) => {
        setItemName(event.target.value);
    }

    const submitClickHandler = (event) => {
        props.onSubmitClick(itemName);
    }

    const cancelClickHandler = (event) => {
        props.onCancelClick(props.previousPage);
    }

    return (
        <div className="newOrUpdateItem">  
            <div className='itemInputFields'>     
                <p className="itemTitle">{props.title}</p>
                <input className="itemName" type="text" value={itemName} onChange={inputHandler}></input>
                <div className="itemButtonContainer">
                    <button className="itemSubmit" onClick={submitClickHandler}>Submit</button>
                    {/* <Button icon={null} text='Submit' onClick={props.onClick} args={itemName} ></Button> */}
                    <button className="itemCancel" onClick={cancelClickHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default NewOrUpdateItem;