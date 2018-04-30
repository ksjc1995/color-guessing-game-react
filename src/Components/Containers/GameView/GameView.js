import React, { Component } from 'react';
import DifficultyLevelBar from '../../DifficultyLevelBar/DifficultyLevelBar';
import ColorDivs from '../../ColorDivs/ColorDivs';

const LEVELS = {
    'easy'  : 4,
    'medium': 6,
    'hard'  : 9
}

class GameView extends Component{
    
    state = {
        gameColor: 'rgb(255, 0, 0)',
        difficulty: 'medium',
        isOver: false
    }

    generateRandomRGB = ()=> {

        const colors = [];
        // getting number of color divs
        const numOfColorDivs = LEVELS[this.state.difficulty];
        // Randomly choosing game color div
        const randomColorDiv = Math.floor(Math.random()*(numOfColorDivs));

        console.log(randomColorDiv);

        for(let i=0;i<numOfColorDivs;i++){
            const red = Math.floor(Math.random()*256);
            const green = Math.floor(Math.random()*256);
            const blue= Math.floor(Math.random()*256);
            let color = 'rgb('+ red + ", " + green + ", " + blue + ")";
            if(randomColorDiv === i)
                color = this.state.gameColor;

            colors.push(color);
        }
        return colors;
    }  

    levelClickHandler = (difficulty) =>{
        this.setState({
            difficulty:difficulty
        });
    }

    colorDivClickHandler = (clickedColor)=>{
        console.log(clickedColor);
        if(this.state.gameColor === clickedColor)
            console.log("you Won");
        else
            console.log("lose");
    }

    render(){

        const randomColors = this.generateRandomRGB();
        return(
            <div>
                <DifficultyLevelBar levelClick={this.levelClickHandler}/>
                <ColorDivs 
                    difficulty={LEVELS[this.state.difficulty]}
                    colorDivClicked={this.colorDivClickHandler}
                    randomColors={randomColors}
                    />
            </div>
        );
    }
}

export default GameView;
