import React from 'react';
import ReactDOM from 'react-dom';

class Circle extends React.Component{
    constructor(props){
        super(props);
        this.state = {hidden: 'hidden'};    // initial state of circle is hidden
        this.show = this.show.bind(this);
    }
    componentWillMount(){   // on mount, the component will be shown after it's timeout prop
        var that = this;
        setTimeout(function(){
            that.show();
        }, this.props.wait);
    }
    show(){
        this.setState({hidden: ''}) // show the circle
    }
    render(){
        return(
            <div className={'circle '+this.state.hidden}></div>    
        )
    }
}

Circle.propTypes = {
  wait: React.PropTypes.number.isRequired,
}

export default Circle;