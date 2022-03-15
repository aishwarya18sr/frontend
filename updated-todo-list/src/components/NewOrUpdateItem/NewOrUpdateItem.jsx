import {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './NewOrUpdateItem.css';
import { LISTS_ROUTE} from "../../constants/routes";

const NewOrUpdateItem = ({title, listData, setListData}) => {

    const navigate = useNavigate();
    const [itemName, setItemName] = useState("");
    const [isInitialized, setIsInitialized] = useState(false);

    let { listId, taskId } = useParams();
    listId = parseInt(listId);
    taskId = parseInt(taskId);
    useEffect(()=>{
      if(title==='Update Task' && !isInitialized) {
        setItemName(listData[listId-1].tasks[taskId-1].name);
        setIsInitialized(true);
        }
        },[title,listId,taskId,listData,isInitialized])
    
    

    const inputHandler = (event) => {
        setItemName(event.target.value);
    }

    const addListHandler = () => {
        const newListItem = {
            id: listData.length + 1,
            listName: itemName,
            tasks:[],
          }
          const updatedList = [
              ...listData,newListItem
          ]
          setListData(()=>updatedList);
          navigate(`${LISTS_ROUTE}`);
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
              name: itemName,
            };
            const modifiedTasks = [...eachList.tasks, addedTask];
            modifiedListItem.tasks = modifiedTasks;
            return modifiedListItem;
          }
        })
         setListData(()=>modifiedList);
         navigate(`${LISTS_ROUTE}/${listId}`);
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
                    name: itemName,
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

    const submitClickHandler = (event) => {
        if(title==='Add List') {
            addListHandler();
        }
        else if(title==='Add Task') {
            createTaskItemHandler();
        }
        else if(title==='Update Task') {
            editTaskItemHandler();
        }
    }

    const cancelClickHandler = (event) => {
        navigate(-1);
    }

    return (
        <div className="newOrUpdateItem">  
            <div className='itemInputFields'>     
                <p className="itemTitle">{title}</p>
                <input className="itemName" type="text" value={itemName} onChange={inputHandler}></input>
                <div className="itemButtonContainer">
                    <button className="itemSubmit" onClick={submitClickHandler}>Submit</button>
                    <button className="itemCancel" onClick={cancelClickHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default NewOrUpdateItem;