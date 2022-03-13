import './ListItem.css'

const ListItem = (props) => {
    const clickHandler = (event) => {
        console.log('i ListItem');
        if(props.onClick)
            props.onClick(props.id);
    }
    return (
        <div className="listItemCard" onClick={clickHandler}>
            <p id="listName">{props.title}</p>
        </div>
    )
}

export default ListItem;