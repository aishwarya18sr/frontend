import './ListItem.css'
import { useNavigate } from "react-router-dom";
import { LISTS_ROUTE } from "../../constants/routes";

const ListItem = ({ id, title }) => {
    const navigate = useNavigate();
    return (
        <div className="listItemCard" onClick={() => {
            navigate(`${LISTS_ROUTE}/${id}`);
        }}>
            <p data-testid="listItemText" className="listItemText">{title}</p>
        </div>
    )
}

export default ListItem;