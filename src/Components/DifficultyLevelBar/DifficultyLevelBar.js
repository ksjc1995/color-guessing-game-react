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
        </Aux>    
    );
};

export default difficultyLevelBar;
