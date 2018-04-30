import React, { Component } from 'react';
import classes from './Button.css';

class Button extends Component{

    handleClick = (title) => {
        this.props.clicked(title);
    }
    render(){

        return(
            <div 
                className={classes.Button}
                onClick = {()=>{this.handleClick(this.props.title)}}
            >{this.props.title}</div>
        );
    }
}

export default Button;