import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button'
import './List.css';


const List = (props) => {

    const getHeading = () => {
        return <p id="heading">{(props.lists.length!==0) ? ((props.lists.length===1) ? 'AVALILABLE LIST' : 'AVAILABLE LISTS') : 'NO LISTS AVAILABLE'}</p> ;
    }
    
    const allLists = props.lists.map((eachList) => {
        return <ListItem key={eachList.id} id={eachList.id} title={eachList.listName} onClick={props.onMoveToTask}></ListItem>
    })

    return (
        <div className="listContainer">
            <header>
                <Button icon='plus' text='CREATE LIST' onClick={props.onChangeState} args='NewListItem'></Button>
            </header>
            <main>
                {getHeading()}
                <div className='listItemContainer'>
                    {allLists}
                </div>
            </main>
        </div>
    )
}

export default List;