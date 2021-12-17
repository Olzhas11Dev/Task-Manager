import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function TasksInputs() {
  const [title, setTitle] = React.useState('');
  const [textArea, setTextArea] = React.useState('');
  const [starIndex, setStarIndex] = React.useState(null);

  const addHandle = () => {
    let objectToAdd = {
      title,
      textArea,
      starIndex,
    };
    console.log(objectToAdd);
    setTitle('');
    setTextArea('');
  };

  return (
    <div className="container">
      <div className="w-75 m-auto form-floating">
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
