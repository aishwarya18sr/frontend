import './ListItem.css'
import {Link} from "react-router-dom"

const ListItem = (props) => {
    const clickHandler = (event) => {
        if(props.onClick)
            props.onClick(props.id);
    }
    return (
        // <Link to='/task' key={props.id}>
            <div className="listItemCard" onClick={clickHandler}>
                <p className="listItemText">{props.title}</p>
            </div>
        // </Link>
    )
}

export default ListItem;