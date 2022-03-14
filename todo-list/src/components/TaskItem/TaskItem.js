import './TaskItem.css'
import Icon from '../Icon/Icon'

const TaskItem = ({id, text, onEditTaskItem, onDeleteTaskItem}) => {

    return (
        <div className='taskItem'>
            <p className='taskItemText'>{text}
            </p>
            <Icon className='taskItemIcon' icon='pencil' onClick={onEditTaskItem} args={id}></Icon>
            <Icon className='taskItemIcon' icon='minus' onClick={onDeleteTaskItem} args={id}></Icon>
        </div>
    )
}

export default TaskItem;