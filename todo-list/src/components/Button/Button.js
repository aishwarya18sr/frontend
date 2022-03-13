import './Button.css'
import {faPlus, faPencil} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({icon, text, onClick, args}) => {
    const getIcon = () => {
        if(icon==='plus') {       
            return <FontAwesomeIcon id='plus' icon={faPlus} />
        }
        else if(icon==='pencil') {
            return <FontAwesomeIcon icon={faPencil} />
        }
        else {
            return
        };
    }

    const getText = () => {
        if(text===null) {
            return
        }
        return <p id='text'>{text}</p>
    }

    const clickHandler = (event) => {
        if(onClick && args===null) {
            onClick();
        }
        else if(onClick)
            onClick(args);
    }

    return (
        <div className="buttonContainer">
            <button onClick={clickHandler}>{getIcon()}{getText()}</button>
        </div>
    )
}

export default Button;