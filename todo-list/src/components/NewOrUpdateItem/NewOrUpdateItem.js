import {useState} from 'react';

const NewOrUpdateItem = (props) => {
    const [itemName, setItemName] = useState(props.initialItemValue);

    const inputHandler = (event) => {
        setItemName(event.target.value);
    }

    const buttonClickHandler = (event) => {
        props.onClick(itemName);
    }

    return (
        <div className="newOrUpdateItem">
            <input type="text" value={itemName} onChange={inputHandler}></input>
            <button onClick={buttonClickHandler}>Submit</button>
        </div>
    )
}

export default NewOrUpdateItem;