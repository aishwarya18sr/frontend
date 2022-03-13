import './Button.css'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({icon, text, onClick, statePage}) => {
    const getIcon = () => {
        if(icon==='plus') {       
            return <FontAwesomeIcon icon={faPlus} />
        }
        else {
            return
        };
    }

    const getText = () => {
        return <p>{text}</p>
    }

    const clickHandler = (event) => {
        if(onClick)
            onClick(statePage);
    }

    return (
        <div className="button">
            <button onClick={clickHandler}>{getIcon()}{getText()}</button>
        </div>
    )
}

export default Button;