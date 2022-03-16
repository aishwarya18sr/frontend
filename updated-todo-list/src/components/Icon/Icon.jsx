import './Icon.css'
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({icon, onClick}) => {
    const getIcon = () => {
        if(icon==='pencil') {
            return <FontAwesomeIcon className='buttonPencil' icon={faPencil} />
        }
        else {
            return
        };
    }

    const clickHandler = (event) => {
        onClick();
    }

    return (
        <div className="iconContainer">
            <button className='commonIcon' data-testid="editIcon" onClick={clickHandler}>{getIcon()}</button>
        </div>
    )
}

export default Icon;