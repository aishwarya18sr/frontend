import './ListItem.css'

const ListItem = (props) => {
    const clickHandler = (event) => {
        if(props.onClick)
            props.onClick(props.id);
    }
    return (
        <div className="listItemCard" onClick={clickHandler}>
            <p>{props.title}</p>
        </div>
    )
}

export default ListItem;