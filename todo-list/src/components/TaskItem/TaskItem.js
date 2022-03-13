import './TaskItem.css'
import Button from '../Button/Button';

const TaskItem = ({id, text, onEditTaskItem}) => {

    return (
        <div>
            <p>{text}</p>
            <Button icon='pencil' text={null} onClick={onEditTaskItem} args={id}></Button>
        </div>
    )
}

export default TaskItem;