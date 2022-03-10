import './App.css';
import List from '../components/List/List'
import NewListItem from '../components/NewListItem/NewListItem'

function App() {
  const list = [
    {title:"Work",description:"Complete the project"},
    {title:"Sports",description:"Play a badminton match"},
    {title:"Hobbies",description:"Do juggling"},
    ];

    const newItemHandler = (newItem) => {
      console.log('Inside app.js',newItem.title,newItem.description);
      list.push(newItem);
    }

  return (
    <div className="App">
      <List list={list}></List>
      <NewListItem onAddNewItem={newItemHandler}></NewListItem>
    </div>
  );
}

export default App;
