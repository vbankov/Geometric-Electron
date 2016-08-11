import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './circle.jsx';
import Square from './square.jsx';
import Diamond from './diamond.jsx';

class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {shape: ''}
  }
  setSquare(){  // set and render square shape 
    this.setState({shape: 'Square'});
    ReactDOM.render(<Square/>, document.getElementById('shape'));
  }
  setDiamond(){ // set and render diamond
    this.setState({shape: 'Diamond'});
    ReactDOM.render(<Diamond/>, document.getElementById('shape'));
  }
  render(){

    return(
      <div>
        <div className={'row flexCenter'}>
          <h3>Geometric shapes</h3>
        </div>
        <div className={'row flexCenter height20'}>
            {this.state.shape}
        </div>
        <div className={'row flexCenter'}>
          <button className={'btn btn-lg btn-default btn-square'} onClick={this.setSquare.bind(this)}>Square</button>
          <button className={'btn btn-lg btn-default btn-diamond'} onClick={this.setDiamond.bind(this)}>Diamond</button>
        
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Container/>, document.getElementById('container'))