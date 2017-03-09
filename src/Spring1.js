import React, { Component } from 'react';

import { Motion, spring } from 'react-motion';

import './App.css';

class Spring1 extends Component {
  render() {
    return (
      <Motion defaultStyle={{animation: this.props.start}} style={{animation: spring(this.props.end, {stiffness: this.props.stiffness, damping: this.props.damping})}}>

        { val => {
          let style = {
            width: val.animation,
            height: val.animation,
            position: 'absolute',
            top: val.animation*0.33,
            left: val.animation*0.25,
            'background-color': `hsla(${ (val.animation / 360) * 100 }, 83%, 63%, 0.6)`,
            'border-radius': '100%',
            transform: `rotate(${val.animation}deg)`
          }
          return <div style={style}></div>
        }}

      </Motion>
    );
  }
}

export default Spring1;
