import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">Column one</div>
        <div className="col-6">
          <span>
            <i className="fa fa-home" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
