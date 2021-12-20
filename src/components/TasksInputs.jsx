import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../actions/taskActions';

function TasksInputs() {
  const [title, setTitle] = React.useState('');
  const [textArea, setTextArea] = React.useState('');
  const [starIndex, setStarIndex] = React.useState(null);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addHandle = async () => {
    if (!title || !textArea) {
      setError(true);
    } else {
      let objectToAdd = {
        title,
        text: textArea,
        starIndex,
        status: false,
      };
      dispatch(addTaskAction(objectToAdd));

      setTitle('');
      setTextArea('');
      setStarIndex(null);
      setError(false);
      navigate('/'); // Please navigate at the end to avoid unmopund problem!!!
    }
  };

  return (
    <div className="container">
      <div className="w-75 m-auto form-floating">
        <button onClick={() => navigate('/')} className="btn mb-2 btn-secondary">
          Go to Tasks
        </button>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Title</label>
        </div>

        <div className="form-floating">
          <textarea
            onChange={(e) => setTextArea(e.target.value)}
            value={textArea}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: '200px' }}></textarea>
          <label htmlFor="floatingTextarea2">Task Description</label>
        </div>
        <div style={{ height: '20px', color: 'red' }}>
          {' '}
          {error && 'Please fill Title and Description filds'}
        </div>
        <h6 className="mt-3">How important your task?</h6>
        <div>
          {[...Array(5)].map((star, index) => (
            <AiFillStar
              key={index}
              style={{ color: starIndex > index ? '#f5c242' : 'grey' }} // StarIndex ALWAYS GREATER +1 if starIndex===index it fills only one
              size={30}
              onClick={() => setStarIndex(index + 1)}
            />
          ))}
        </div>

        <button
          onClick={() => addHandle()}
          className="btn btn-secondary mt-3 btn-lg "
          style={{ width: '100%' }}>
          Add
        </button>
      </div>
    </div>
  );
}

export default TasksInputs;
