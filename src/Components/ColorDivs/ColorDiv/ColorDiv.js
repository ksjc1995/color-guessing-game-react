import React, { Component } from 'react';

class ColorDiv extends Component {

    handleClick = (styles)=>{
        console.log(styles.backgroundColor);
        this.props.clicked(styles.backgroundColor);
    }

    render(){
        const styles = {
            boxSizing: 'border-box',
            borderRadius: '5px',
            backgroundColor:this.props.randomColor,
            width:'30%',
	        float: 'left', 
        	margin: '1.66%',
	        paddingBottom:'25%' /*to add some space*/
        };

        return (
            <div style={styles} onClick={()=> {this.handleClick(styles)}}>
      
            </div>  
          );
    }
    

    
}

export default ColorDiv;