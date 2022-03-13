import './App.css';
import List from '../components/List/List';
import Task from '../components/Task/Task';
import NewOrUpdateItem from '../components/NewOrUpdateItem/NewOrUpdateItem';
import {useState} from 'react';

const initialLists = [
  {
    id:1,
    listName:'Self Development 1',
    tasks:[
      {
        id:1,
        name:'Breathing exercise for 15 mins 1'
      },
      {
        id:2,
        name:'Walk for 15 mins 1'
      },
      {
        id:3,
        name:'Prepare your own meal 1'
      },
      {
        id:4,
        name:'journel at night 1'
      },
    ]
  },
  {
    id:2,
    listName:'Self Development 2',
    tasks:[
      {
        id:1,
        name:'Breathing exercise for 15 mins 2'
      },
      {
        id:2,
        name:'Walk for 15 mins 2'
      },
      {
        id:3,
        name:'Prepare your own meal 2'
      },
      {
        id:4,
        name:'journel at night 2'
      },
    ]
  },
  {
    id:3,
    listName:'Self Development 3',
    tasks:[
      {
        id:1,
        name:'Breathing exercise for 15 mins 3'
      },
      {
        id:2,
        name:'Walk for 15 mins 3'
      },
      {
        id:3,
        name:'Prepare your own meal 3'
      },
      {
        id:4,
        name:'journel at night 3'
      },
    ]
  }
];

function App() {
  const [currentStatePage, setCurrentStatePage] = useState('List'); 
  const [currentList, setCurrentList] = useState(initialLists);
  const [currentListId, setCurrentListId] = useState(1);
  const [currentTaskId, setCurrentTaskId] = useState(1);
  const [currentListItem, setCurrentListItem] = useState([]);
  const [currentTaskItem, setcurrentTaskItem] = useState([]);



  const changeStateHandler = (newState) => {
    setCurrentStatePage(newState);
  }

  const addListItemHandler = (listName) => {
    const newListItem = {
      id: currentList.length + 1,
      listName,
      tasks:[],
    }
    const updatedList = [
        ...currentList,newListItem
    ]
    setCurrentList(()=>updatedList);
    setCurrentStatePage('List');
  }

  const moveToTaskHandler = (id) => {
      setCurrentListId(id);
      setCurrentListItem(currentList[id-1])
      setCurrentStatePage('Task');
  }

  const createTaskItemHandler = (taskName) => {
    const modifiedList = currentList.map((eachList) => {
      if(eachList.id !== currentListId) {
        return eachList;
      }
      else {
        const modifiedListItem = {};
        modifiedListItem.id = eachList.id;
        modifiedListItem.listName = eachList.listName;
        const addedTask = {
          id: eachList.tasks.length + 1,
          name: taskName,
        };
        const modifiedTasks = [...eachList.tasks, addedTask];
        modifiedListItem.tasks = modifiedTasks;
        return modifiedListItem;
      }
    })
     setCurrentList(()=>modifiedList);
     setCurrentListItem(()=>modifiedList[currentListId-1]);
     setCurrentStatePage('Task');
  }

  const moveToEditTaskHandler = (id) => {
    setCurrentTaskId(()=>id);
    setcurrentTaskItem(()=>currentListItem.tasks[id-1]);
    setCurrentStatePage('EditTaskItem')
}

  const editTaskItemHandler = (taskName) => {
    const modifiedList = currentList.map((eachList) => {
      if(eachList.id !== currentListId) {
        return eachList;
      }
      else {
        const modifiedListItem = {};
        modifiedListItem.id = eachList.id;
        modifiedListItem.listName = eachList.listName;
        const modifiedTasks = eachList.tasks.map((eachTask) => {
            if(eachTask.id !== currentTaskId) {
              return eachTask;
            }
            else {
              const modifiedTask = {
                id: currentTaskId,
                name: taskName,
              };
              return modifiedTask;
            }
        });
        modifiedListItem.tasks = modifiedTasks;
        return modifiedListItem;
      }
    })
     setCurrentList(()=>modifiedList);
     setCurrentListItem(()=>modifiedList[currentListId-1]);
     setCurrentStatePage('Task');
  }

  return (
    <div className="App">
        {(currentStatePage === 'List') ?
            <List lists={currentList} onChangeState={changeStateHandler} onMoveToTask={moveToTaskHandler}></List> : 
            (currentStatePage === 'NewListItem') ?
            <NewOrUpdateItem title='Add List' initialItemValue='' onClick={addListItemHandler}></NewOrUpdateItem> :
            (currentStatePage === 'Task') ? 
            <Task list={currentListItem} onCreateTask={changeStateHandler} onEditTaskItem={moveToEditTaskHandler}></Task> :
            (currentStatePage === 'NewTaskItem') ?
            <NewOrUpdateItem title='Add Task' initialItemValue='' onClick={createTaskItemHandler}></NewOrUpdateItem> :
            (currentStatePage === 'EditTaskItem') ?
            <NewOrUpdateItem title='Update Task' initialItemValue={currentTaskItem.name} onClick={editTaskItemHandler}></NewOrUpdateItem> :
            <></>
        }
    </div>
  );
}


export default App;
