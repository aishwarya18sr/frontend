import { useNavigate, useParams } from "react-router-dom";
import '../NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import { LISTS_ROUTE} from "../../constants/routes";
import NewOrUpdateItemCard from "../NewOrUpdateItemCard/NewOrUpdateItemCard";
import { useState } from "react";

const EditTask = ({listData, setListData}) => {

    const navigate = useNavigate();
    

    let { listId, taskId } = useParams();
    listId = parseInt(listId);
    taskId = parseInt(taskId);

    const [initialTaskName, setInitialTaskName] = useState(listData[listId-1].tasks[taskId-1].name);

      const editTaskItemHandler = (taskName) => {
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
      <NewOrUpdateItemCard title='Update Task' initialValue={initialTaskName} submitClickHandler={editTaskItemHandler} cancelClickHandler={cancelClickHandler}></NewOrUpdateItemCard>
    )
}

export default EditTask;