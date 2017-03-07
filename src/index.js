import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Spring1 from './Spring1';
import './index.css';


class App extends Component {
  render() {
    return (
      <div>
        <Spring1 start={720} end={360} stiffness={140} damping={21} />
        <Spring1 start={420} end={320} stiffness={100} damping={12} />
        <Spring1 start={1} end={140} stiffness={130} damping={16} />
        <Spring1 start={101} end={83} stiffness={90} damping={13} />
        <Spring1 start={283} end={192} stiffness={100} damping={16} />
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
