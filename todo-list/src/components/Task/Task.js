import TaskItem from '../TaskItem/TaskItem';
import Button from '../Button/Button';
import './Task.css';


const Task = (props) => {
    const allTasks = props.list.tasks.map((eachTask) => {
        return <TaskItem key={eachTask.id} id={eachTask.id} text={eachTask.name} onEditTaskItem={props.onEditTaskItem}></TaskItem>
    })

    const onClickHandler = (event) => {
        props.onCreateTask('NewTaskItem');
    }

    return (
        <div className="taskContainer">
            <header>
                <Button icon='plus' text='CREATE TASK' onClick={onClickHandler} args={null}></Button>
            </header>
            <main>
                <p>{props.list.listName}</p>
                <div className='taskItemContainer'>
                    {allTasks}
                </div>
            </main>
        </div>
    )
}

export default Task;