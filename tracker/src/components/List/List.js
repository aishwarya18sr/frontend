import ListItem from '../ListItem/ListItem';
import './List.css';

const List = (props) => {
    const addListItems = props.list.map((eachItem, index) => {
        return <ListItem key={index} title={eachItem.title} description={eachItem.description}></ListItem>;
    });
    return (
        <div className="listContainer">
            {addListItems}
        </div>  
    )   
}

export default List;