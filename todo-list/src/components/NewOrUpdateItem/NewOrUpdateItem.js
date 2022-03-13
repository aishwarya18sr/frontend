import {useState} from 'react';
import Button from '../Button/Button'
import './NewOrUpdateItem.css';

const NewOrUpdateItem = (props) => {
    const [itemName, setItemName] = useState(props.initialItemValue);

    const inputHandler = (event) => {
        setItemName(event.target.value);
    }

    const clickHandler = (event) => {
        props.onClick(itemName);
    }

    return (
        <div className="newOrUpdateItem">  
            <form className='inputFields'>     
                <p className="title">{props.title}</p>
                <input id="itemName" type="text" value={itemName} onChange={inputHandler}></input>
                <div className="buttonContainer">
                <button className="submit" onClick={clickHandler} >Submit</button>
                    {/* <Button icon={null} text='Submit' onClick={props.onClick} args={itemName} ></Button> */}
                    <button className="cancel" type="cancel">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default NewOrUpdateItem;