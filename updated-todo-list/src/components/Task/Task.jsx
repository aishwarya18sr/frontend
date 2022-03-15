import TaskItem from '../TaskItem/TaskItem';
import Button from '../Button/Button';
import { useNavigate, useParams } from "react-router-dom";
import { LISTS_ROUTE, TASKS_ROUTE } from "../../constants/routes";
import './Task.css';


const Task = ({listData}) => {
    const navigate = useNavigate();
    const {listId} = useParams();
    const allTasks = listData[listId-1].tasks.map((eachTask) => {
        return <TaskItem key={eachTask.id} id={eachTask.id} text={eachTask.name}></TaskItem>
    })

    return (
        <div className="taskContainer">
                <div className='taskButton'>
                    <Button icon='plus' text='CREATE TASK' onClick={() => {
                        navigate(`${LISTS_ROUTE}/${listId}${TASKS_ROUTE}/create`);
                        }}></Button>           
                </div>
                <main className='taskMain'>
                    <p className='taskText'>{listData[listId-1].listName}</p>
                    <div className='taskItemContainer'>
                        {allTasks}
                    </div>
                </main>
        </div>
    )
}

export default Task;