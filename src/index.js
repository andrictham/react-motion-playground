import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Spring1 from './Spring1';
import './index.css';


class App extends Component {
  render() {
    return (
      <div>
        <Spring1 start={720} end={360} stiffness={17} damping={1} />
        <Spring1 start={420} end={320} stiffness={20} damping={2} />
        <Spring1 start={1} end={140} stiffness={25} damping={4} />
        <Spring1 start={101} end={83} stiffness={32} damping={3} />
        <Spring1 start={283} end={192} stiffness={29} damping={4} />
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
