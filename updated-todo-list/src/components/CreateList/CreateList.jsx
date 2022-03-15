import {useState} from 'react';
import { useNavigate} from "react-router-dom";
import './CreateList.css';
import { LISTS_ROUTE} from "../../constants/routes";

const CreateList = ({listData, setListData}) => {

    const navigate = useNavigate();
    const [listName, setListName] = useState("");


    const inputHandler = (event) => {
        setListName(event.target.value);
    }

    const addListHandler = (event) => {
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
        <div className="newOrUpdateItem">  
            <div className='itemInputFields'>     
                <p className="itemTitle">Add List</p>
                <input className="itemName" type="text" value={listName} onChange={inputHandler}></input>
                <div className="itemButtonContainer">
                    <button className="itemSubmit" onClick={addListHandler}>Submit</button>
                    <button className="itemCancel" onClick={cancelClickHandler}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default CreateList;