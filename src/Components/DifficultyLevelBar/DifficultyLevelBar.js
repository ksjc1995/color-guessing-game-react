import React from 'react';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/Aux';
const difficultyLevelBar = ( props ) => {
    return(
        <Aux>
            <Button title='Easy'  clicked={props.levelClick}/>
            <Button title='Medium'clicked={props.levelClick}/>
            <Button title='Hard'  clicked={props.levelClick}/>
            <Button title='Reset' reset={props.resetClick}/>
            <span style={{marginLeft:"0.5em",fontWeight:"bold"}}>Chances Left: {props.chances}</span>
        </Aux>    
    );
};

export default difficultyLevelBar;
