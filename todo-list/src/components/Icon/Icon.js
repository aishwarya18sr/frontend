import './Icon.css'
import {faPencil, faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({icon, onClick, args}) => {
    const getIcon = () => {
        if(icon==='pencil') {
            return <FontAwesomeIcon className='buttonPencil' icon={faPencil} />
        }
        else if(icon==='minus') {
            return <FontAwesomeIcon className='buttonPencil' icon={faMinusCircle} />
        }
        else {
            return
        };
    }

    const clickHandler = (event) => {
        if(onClick && args===null) {
            onClick();
        }
        else if(onClick)
            onClick(args);
    }

    return (
        <div className="iconContainer">
            <button className='commonIcon' onClick={clickHandler}>{getIcon()}</button>
        </div>
    )
}

export default Icon;