import './App.css';
import AllEmployees from './components/AllEmployees';
import {DragDropContext} from 'react-beautiful-dnd'

const onDragEnd = (result) =>{
  
}

function App() {
  return (
    // <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <AllEmployees></AllEmployees>
      </div>
    // </DragDropContext>
  );
}

export default App;
