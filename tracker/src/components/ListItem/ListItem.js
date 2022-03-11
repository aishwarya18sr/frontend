import './ListItem.css';
import {useState} from 'react';

const ListItem = (props) => {
    const [currentTitle, setCurrentTitle] = useState(props.title); 
    const titleChangeHandler = () => {
        setCurrentTitle('Updated Title');
    }
    return(
        <div className="listItemContainer">
            <h1>{currentTitle}</h1>
            <p>{props.description}</p>
            <p>Number of hours : {props.hours}</p>
            <button onClick={titleChangeHandler}>Change Title</button>
        </div>
    )
}

export default ListItem;