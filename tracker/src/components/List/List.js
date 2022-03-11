import ListItem from '../ListItem/ListItem';
import './List.css';
import Dropdown from '../Dropdown/Dropdown';

const List = (props) => {

    return (
        <div>
            <div className="listDropdown">
                <Dropdown list={props.mainList} onClick={props.onDropdownClick}></Dropdown>
            </div>
            <div className="listContainer">
                {props.filteredList.map((eachItem) => { 
                    return <ListItem key={eachItem.id} title={eachItem.title} description={eachItem.description} hours={eachItem.hours}>
                </ListItem>;})}
            </div>  
        </div>
    )   
}

export default List;