import React from 'react';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/Aux';
const difficultyLevelBar = ( props ) => {
    return(
        <Aux>
            <Button title='easy'  clicked={props.levelClick}/>
            <Button title='medium'clicked={props.levelClick}/>
            <Button title='hard'  clicked={props.levelClick}/>
        </Aux>    
    );
};

export default difficultyLevelBar;
