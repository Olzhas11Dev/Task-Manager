import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TasksInputs from './TasksInputs';
import TasksList from './TasksList';

function App() {
  return (
    <div className="container">
      <h2 className="text-center mt-3 " style={{ marginBottom: '40px' }}>
        Task manager
      </h2>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inputs" element={<TasksInputs />} />
      </Routes>
    </div>
  );
}

export default App;

// AddTask
//Remove
