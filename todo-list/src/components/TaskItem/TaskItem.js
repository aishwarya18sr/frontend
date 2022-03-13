import './TaskItem.css'
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({id, text, onEditTaskItem}) => {
    const getIcon = () => {   
        return <FontAwesomeIcon icon={faPencil} />
    }

    const getText = () => {
        return <p>{text}</p>
    }

    const clickHandler = (event) => {
        event.preventDefault();
        if(onEditTaskItem)
        onEditTaskItem(id);
    }

    return (
        <div className="button">
            <button onClick={clickHandler}>{getText()}{getIcon()}</button>
        </div>
    )
}

export default Button;