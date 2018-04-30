import React from 'react';
import ColorDiv from './ColorDiv/ColorDiv';

const colorDivs = ( props )=>{
  const styles = {
    boxSizing:'border-box',
    maxWidth:'600px',
    margin:'auto',
  };

  return (
    <div style={styles}>  
        {props.randomColors.map((color)=>{
            return(
                <ColorDiv
                    key={color} 
                    clicked= {props.colorDivClicked}
                    randomColor = {color}
                />
            );
        })}
    </div>
  );
}

export default colorDivs;