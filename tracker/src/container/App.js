import './App.css';
import List from '../components/List/List';
import NewListItem from '../components/NewListItem/NewListItem';
import {useState} from 'react';

function App() {
  
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(1000);

  const initialList = [
    {id:Math.floor(Math.random() * 100),title:"Work",description:"Complete the project",hours:58},
    {id:Math.floor(Math.random() * 100),title:"Sports",description:"Play a badminton match",hours:108},
    {id:Math.floor(Math.random() * 100),title:"Hobbies",description:"Do juggling",hours:28},
    ];

    const [currentList, setCurrentList] = useState(initialList);
    const [currentFilteredList, setCurrentFilteredList] = useState(initialList);

    const newItemHandler = (newItem) => {
      newItem.id = Math.floor(Math.random() * 100);
      setCurrentList((prevList) => [...prevList,newItem]);
      const noOfHours = parseInt(newItem.hours);
      if(noOfHours >= lowerLimit && noOfHours < upperLimit) {
        setCurrentFilteredList((prevList) => [...prevList,newItem]);
      }
    }

    const dropdownHandler = (...received) => {
        setCurrentFilteredList(received[0]);
        setLowerLimit(received[1]);
        setUpperLimit(received[2]);
    }

  return (
    <div className="App">
      <List mainList={currentList} filteredList={currentFilteredList} onDropdownClick={dropdownHandler}></List>
      <NewListItem onAddNewItem={newItemHandler}></NewListItem>
    </div>
  );
}

export default App;
