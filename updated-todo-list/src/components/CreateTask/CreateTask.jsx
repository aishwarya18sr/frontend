import {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './CreateTask.css';
import { LISTS_ROUTE} from "../../constants/routes";

const CreateTask = ({listData, setListData}) => {

    const navigate = useNavigate();
    const [taskName, setTaskName] = useState("");

    let { listId} = useParams();
    listId = parseInt(listId);

    const inputHandler = (event) => {
        setTaskName(event.target.value);
    }

    const createTaskItemHandler = () => {
        const modifiedList = listData.map((eachList) => {
          if(eachList.id !== listId) {
            return eachList;
          }
          else {
            const modifiedListItem = {};
            modifiedListItem.id = eachList.id;
            modifiedListItem.listName = eachList.listName;
            const addedTask = {
              id: ((eachList.tasks.length===0)?1:eachList.tasks[eachList.tasks.length-1].id + 1),
              name: taskName,
            };
            const modifiedTasks = [...eachList.tasks, addedTask];
            modifiedListItem.tasks = modifiedTasks;
            return modifiedListItem;
          }
        })
         setListData(()=>modifiedList);
         navigate(`${LISTS_ROUTE}/${listId}`);
      }


    const cancelClickHandler = (event) => {
        navigate(-1);
    }

    return (
        <div className="newOrUpdateItem">  
            <div className='itemInputFields'>     
                <p className="itemTitle">Add Task</p>
                <input className="itemName" type="text" value={taskName} onChange={inputHandler}></input>
                <div className="itemButtonContainer">
                    <button className="itemSubmit" onClick={createTaskItemHandler}>Submit</button>
                    <button className="itemCancel" onClick={cancelClickHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;