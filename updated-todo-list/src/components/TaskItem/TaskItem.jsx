import './TaskItem.css'
import Icon from '../Icon/Icon'
import { useNavigate, useParams } from "react-router-dom";
import { LISTS_ROUTE, TASKS_ROUTE } from "../../constants/routes";

const TaskItem = ({id, text, onEditTaskItem, onDeleteTaskItem}) => {
    const navigate = useNavigate();
    const {listId} = useParams();
    return (
        <div className='taskItem'>
            <p className='taskItemText'>{text}
            </p>
            <Icon className='taskItemIcon' icon='pencil' onClick={() => {
                        navigate(`${LISTS_ROUTE}/${listId}${TASKS_ROUTE}/${id}/update`);
                        }}></Icon>
        </div>
    )
}

export default TaskItem;