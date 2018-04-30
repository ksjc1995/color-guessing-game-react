import React, { Component } from 'react';

class ColorDiv extends Component {

    handleClick = (styles)=>{
        console.log(styles.backgroundColor);
        this.props.clicked(styles.backgroundColor);
    }

    generateRandomRGB = ()=> {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue= Math.floor(Math.random()*256);
        const color = 'rgb('+ red + ", " + green + ", " + blue + ")";
        return color;
    }  

    render(){
        const styles = {
            boxSizing: 'border-box',
            borderRadius: '5px',
            backgroundColor: this.generateRandomRGB(),
            width:'30%',
	        float: 'left', 
        	margin: '1.66%',
	        paddingBottom:'30%' /*to add some space*/
        };

        return (
            <div style={styles} onClick={()=> {this.handleClick(styles)}}>
      
            </div>  
          );
    }
    

    
}

export default ColorDiv;