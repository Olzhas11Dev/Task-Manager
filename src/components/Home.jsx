import React from 'react';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <div className="d-flex justify-content-between">
              <button type="button" class="btn btn-sm btn-outline-success">
                Remove
              </button>
              <button type="button" class="btn btn-sm btn-outline-success ">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
