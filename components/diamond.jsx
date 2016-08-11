import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './circle.jsx';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Diamond extends React.Component{
  render(){
    return(
      <ReactCSSTransitionGroup transitionName="shapeTransition" 
                transitionAppear = {true} transitionAppearTimeout = {200}
                transitionEnter = {false} transitionLeave = {false}>
          <div>
            <div className={'row centerFlex'}>
                <Circle wait={0}/>
            </div>
            <div className={'row centerFlex'}>
                <Circle wait={50}/> <Circle wait={50}/>
            </div>
            <div className={'row centerFlex'}>
                <Circle wait={100}/> <Circle wait={100}/> <Circle wait={100}/>
            </div>
            <div className={'row centerFlex'}>
                <Circle wait={200}/> <Circle wait={200}/> <Circle wait={200}/> <Circle wait={200}/>
            </div>
            <div className={'row centerFlex'}>
                <Circle wait={300}/> <Circle wait={300}/> <Circle wait={300}/> <Circle wait={300}/> <Circle wait={300}/>
            </div>
            <div className={'row centerFlex'}>
                <Circle wait={400}/> <Circle wait={400}/> <Circle wait={400}/> <Circle wait={400}/>
            </div>        
            <div className={'row centerFlex'}>
                <Circle wait={500}/> <Circle wait={500}/> <Circle wait={500}/>
            </div>
            <div className={'row centerFlex'}>
                <Circle wait={600}/> <Circle wait={600}/>
            </div>
            <div className={'row centerFlex'}>
                <Circle wait={700}/>
            </div>
          </div>
        </ReactCSSTransitionGroup>
    );
  }
}

export default Diamond