import ListItem from '../ListItem/ListItem';
import Button from '../Button/Button'
import { useNavigate } from "react-router-dom";
import { LISTS_ROUTE } from "../../constants/routes";
import './List.css';


const List = ({listData}) => {

    const navigate = useNavigate();

    const getHeading = () => {
        return <p className="listHeading">{(listData.length!==0) ? ((listData.length===1) ? 'AVALILABLE LIST' : 'AVAILABLE LISTS') : 'NO LISTS AVAILABLE'}</p> ;
    }
    
    const allLists = listData.map((eachList) => {
        return <ListItem key={eachList.id} id={eachList.id} title={eachList.listName}></ListItem>
    })


    return (
        <div className="listContainer">
            <header className='listHeader'>
                    <Button icon='plus' text='CREATE LIST' onClick={() => {
                        navigate(`${LISTS_ROUTE}/create`);
                        }}>
                </Button>
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