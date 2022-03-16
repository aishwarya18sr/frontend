import { useNavigate, useParams } from "react-router-dom";
import '../NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import { LISTS_ROUTE} from "../../constants/routes";
import NewOrUpdateItemCard from '../NewOrUpdateItemCard/NewOrUpdateItemCard';

const CreateTask = ({listData, setListData}) => {

    const navigate = useNavigate();

    let { listId} = useParams();
    listId = parseInt(listId);

    const createTaskItemHandler = (taskName) => {
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
      <NewOrUpdateItemCard title="Add Task" initialValue="" submitClickHandler={createTaskItemHandler} cancelClickHandler={cancelClickHandler}></NewOrUpdateItemCard>
    )
}

export default CreateTask;