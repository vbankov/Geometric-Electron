import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './circle.jsx';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Square extends React.Component{
  render(){
    return(
      <ReactCSSTransitionGroup transitionName="shapeTransition" 
                transitionAppear = {true} transitionAppearTimeout = {200}
                transitionEnter = {false} transitionLeave = {false}>
        <div>
          <div className={'row centerFlex'}>
            <Circle wait={25}/><Circle wait={50}/><Circle wait={75}/><Circle wait={100}/><Circle wait={125}/> 
          </div>
          <div className={'row centerFlex'}>
            <Circle wait={150}/><Circle wait={175}/><Circle wait={200}/><Circle wait={225}/><Circle wait={250}/> 
          </div>
          <div className={'row centerFlex'}>
            <Circle wait={275}/><Circle wait={300}/><Circle wait={325}/><Circle wait={350}/><Circle wait={375}/> 
          </div>
          <div className={'row centerFlex'}>
            <Circle wait={400}/><Circle wait={425}/><Circle wait={450}/><Circle wait={475}/><Circle wait={500}/>         <br/>
          </div>
          <div className={'row centerFlex'}>
            <Circle wait={525}/><Circle wait={550}/><Circle wait={575}/><Circle wait={600}/><Circle wait={625}/> 
          </div>
        </div>
      </ReactCSSTransitionGroup>      
    );
  }
}

export default Square