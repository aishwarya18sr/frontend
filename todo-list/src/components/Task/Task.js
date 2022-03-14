import TaskItem from '../TaskItem/TaskItem';
import Button from '../Button/Button';
import './Task.css';


const Task = (props) => {
    const allTasks = props.list.tasks.map((eachTask) => {
        return <TaskItem key={eachTask.id} id={eachTask.id} text={eachTask.name} onEditTaskItem={props.onEditTaskItem} onDeleteTaskItem={props.onDeleteTaskItem}></TaskItem>
    })

    const onClickHandler = (event) => {
        props.onCreateTask('NewTaskItem');
    }

    return (
        <div className="taskContainer">
                <div className='taskButton'>
                    <Button icon='plus' text='CREATE TASK' onClick={onClickHandler} args={null}></Button>           
                </div>
                <main className='taskMain'>
                    <p className='taskText'>{props.list.listName}</p>
                    <div className='taskItemContainer'>
                        {allTasks}
                    </div>
                </main>
        </div>
    )
}

export default Task;