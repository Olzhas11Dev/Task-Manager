import React from 'react';

import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { AiFillStar } from 'react-icons/ai';

function Home() {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    refreshPage();
  }, []);

  const handleAddTask = () => {
    navigate('/inputs');
  };

  const removeHandle = async (item) => {
    await Axios.delete(`https://61b7e56c64e4a10017d18cf0.mockapi.io/Tasks/${item.id}`);
    refreshPage();
  };

  const refreshPage = async () => {
    await Axios.get('https://61b7e56c64e4a10017d18cf0.mockapi.io/Tasks').then((res) => {
      setData(res.data);
    });
  };

  console.log(data);

  const doneHandle = async (item) => {
    let founded = data.find((elem) => elem.id === item.id);

    if (founded) {
      founded.status = !item.status;
      await Axios.put(`https://61b7e56c64e4a10017d18cf0.mockapi.io/Tasks/${item.id}`, founded);
    }
    refreshPage();
  };

  return (
    <div className="container">
      <button onClick={handleAddTask} className="btn mb-2 btn-secondary">
        Add Task
      </button>

      <div className="row ">
        {data.map((elem) => (
          <div
            style={{ background: elem.status ? '#D9E7FC' : null }}
            className=" card  col-lg-3  col-md-6 col-sm-6 "
            key={elem.id}>
            <div className="card-body">
              <h5 className="card-title">Task title</h5>
              <h6 className="card-subtitle mb-1 text-muted">{elem.title}</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>

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
