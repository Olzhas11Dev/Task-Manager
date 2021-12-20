import React from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction, fetchTasksAction, removeTaskAction } from '../actions/taskActions';

function Home() {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  const selectTasks = useSelector((state) => state.tasks.tasksData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTasksAction());
  }, []);

  const handleAddTask = () => {
    navigate('/inputs');
  };

  const removeHandle = async (item) => {
    dispatch(removeTaskAction(item));
  };

  const doneHandle = async (item) => {
    dispatch(checkStatusAction(selectTasks, item));
  };

  return (
    <div className="container">
      <button
        style={{ marginLeft: '-12px' }}
        onClick={handleAddTask}
        className="btn mb-2 btn-secondary">
        Add Task
      </button>

      <div className="row ">
        {selectTasks.map((elem) => (
          <div
            style={{ background: elem.status ? '#D9E7FC' : null }}
            className=" card  col-lg-3  col-md-6 col-sm-6 "
            key={elem.id}>
            <div className="card-body">
              <h5 className="card-title">Task title</h5>
              <h6 className="card-subtitle mb-1 text-muted">{elem.title}</h6>
              <p className="card-text">{elem.text}</p>

              <div className="raiting mb-3">
                {[...Array(5)].map((star, index) => (
                  <AiFillStar
                    key={index}
                    style={{ color: '#f5c242' }} // StarIndex ALWAYS GREATER +1 if starIndex===index it fills only one
                    size={20}
                    style={{ color: elem.starIndex > index ? '#f5c242' : 'grey' }}
                  />
                ))}
              </div>
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => removeHandle(elem)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary">
                  Remove
                </button>
                {elem.status ? (
                  <button
                    onClick={() => doneHandle(elem)}
                    type="button"
                    className="btn btn-sm btn-outline-secondary ">
                    Not Yet
                  </button>
                ) : (
                  <button
                    onClick={() => doneHandle(elem)}
                    type="button"
                    className="btn btn-sm btn-outline-secondary ">
                    Done
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
