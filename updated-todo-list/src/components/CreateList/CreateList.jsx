import { useNavigate} from "react-router-dom";
import '../NewOrUpdateItemCard/NewOrUpdateItemCard.css';
import { LISTS_ROUTE} from "../../constants/routes";
import NewOrUpdateItemCard from '../NewOrUpdateItemCard/NewOrUpdateItemCard';

const CreateList = ({listData, setListData}) => {

    const navigate = useNavigate();


    const addListHandler = (listName) => {
        const newListItem = {
            id: listData.length + 1,
            listName: listName,
            tasks:[],
          }
          setListData((previousList)=>[...previousList,newListItem]);
          navigate(`${LISTS_ROUTE}`);
    }

    const cancelClickHandler = (event) => {
        navigate(-1);
    }

    return (
        <NewOrUpdateItemCard title='Add List' initialValue="" submitClickHandler={addListHandler} cancelClickHandler={cancelClickHandler}></NewOrUpdateItemCard>
    )
}

export default CreateList;