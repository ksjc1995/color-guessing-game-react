import React, { Component } from 'react';
import classes from './Button.css';

class Button extends Component{

    handleClick = (title) => {
        if(title === 'Reset'){
            this.props.reset();
            return;
        }
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