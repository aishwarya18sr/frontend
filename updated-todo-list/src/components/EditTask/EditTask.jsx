import {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './EditTask.css';
import { LISTS_ROUTE} from "../../constants/routes";

const EditTask = ({listData, setListData}) => {

    const navigate = useNavigate();

    let { listId, taskId } = useParams();
    listId = parseInt(listId);
    taskId = parseInt(taskId);

    const [taskName, setTaskName] = useState(listData[listId-1].tasks[taskId-1].name);

    const inputHandler = (event) => {
        setTaskName(event.target.value);
    }

      const editTaskItemHandler = () => {
        const modifiedList = listData.map((eachList) => {
          if(eachList.id !== listId) {
            return eachList;
          }
          else {
            const modifiedListItem = {};
            modifiedListItem.id = eachList.id;
            modifiedListItem.listName = eachList.listName;
            const modifiedTasks = eachList.tasks.map((eachTask) => {
                if(eachTask.id !== taskId) {
                  return eachTask;
                }
                else {
                  const modifiedTask = {
                    id: taskId,
                    name: taskName,
                  };
                  return modifiedTask;
                }
            });
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
                <p className="itemTitle">Update Task</p>
                <input className="itemName" type="text" value={taskName} onChange={inputHandler}></input>
                <div className="itemButtonContainer">
                    <button className="itemSubmit" onClick={editTaskItemHandler}>Submit</button>
                    <button className="itemCancel" onClick={cancelClickHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask;