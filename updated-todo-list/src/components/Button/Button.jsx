import './Button.css'
import {faPlus, faPencil} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({icon, text, onClick}) => {
    const getIcon = () => {
        if(icon==='plus') {       
            return <FontAwesomeIcon className='buttonPlus' icon={faPlus} />
        }
        else if(icon==='pencil') {
            return <FontAwesomeIcon className='buttonPencil' icon={faPencil} />
        }
        else {
            return
        };
    }

    const getText = () => {
        if(text===null) {
            return
        }
        return <p className='buttonText'>{text}</p>
    }

    function clickHandler(event) {
            onClick();
    }

    return (
        <div className="buttonContainer">
            <button className='commonbutton' data-testid="createButton" onClick={clickHandler}>{getIcon()}{getText()}</button>
        </div>
    )
}

export default Button;