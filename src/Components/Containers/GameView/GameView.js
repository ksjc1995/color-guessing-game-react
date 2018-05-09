import React, { Component } from 'react';
import DifficultyLevelBar from '../../DifficultyLevelBar/DifficultyLevelBar';
import ColorDivs from '../../ColorDivs/ColorDivs';
import Aux from '../../../hoc/Aux';

const LEVELS = {
    'Easy'  : 4,
    'Medium': 6,
    'Hard'  : 9
}

class GameView extends Component{
    
    state = {
        gameColor:null,
        chances:3, // including 0 i.e total chances = 3
        difficulty:null,
        wrong:null,
        isOver: false,
        colors:[]
    }

    generateRandomRGB = (difficulty)=> {

        const colors = [];
        // getting number of color divs
        const numOfColorDivs = LEVELS[difficulty];
        // Randomly choosing game color div
        const randomColorDiv = Math.floor(Math.random()*(numOfColorDivs));
        
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue= Math.floor(Math.random()*256);
        const gameColor = 'rgb('+ red + ", " + green + ", " + blue + ")";
        this.setState({
            gameColor:gameColor
        })

        for(let i=0;i<numOfColorDivs;i++){
            const red = Math.floor(Math.random()*256);
            const green = Math.floor(Math.random()*256);
            const blue= Math.floor(Math.random()*256);
            let color = 'rgb('+ red + ", " + green + ", " + blue + ")";
            if(randomColorDiv === i)
                color = gameColor;

            colors.push(color);
        }

        return colors;
    }  

    levelClickHandler = (difficulty) =>{
        const colors = this.generateRandomRGB(difficulty);
        this.setState({
            difficulty:difficulty,
            colors:colors
        });
        
    }


    colorDivClickHandler = (clickedColor)=>{
        console.log(clickedColor);
        let chances = this.state.chances;
        chances -= 1;
        console.log(`Chances : ${chances}`);

        if(chances === 0){
            console.log("Game Over ");
            this.setState({
                isOver:true,
                chances: 0
            });
            return;
        }
            

        if(this.state.gameColor === clickedColor)
           {
                this.setState({
                    wrong:false,
                    isOver:true,
                    chances:chances
                });
           }
        else{

            this.setState({
                    chances:chances, 
                    wrong:true,
                    isOver:false
                })
        }   
        }

    resetGameHandler = ()=>{
        this.setState({
            gameColor: 'rgb(255, 0, 0)',
            chances:3,
            difficulty:null,
            wrong:null,
            isOver: false,
            colors:[]
        });
    }

    setColors = (colors) =>{
        this.setState({
            colors:colors
        });
    }

    render(){

        let message = null;
        let gameView = null;

        if(this.state.wrong && this.state.wrong!==null){
            console.log('Incorrect');            
            message = (<span style={{color:'darkred',fontSize:'1.5rem'}}>Incorrect</span>);
        }
        else if(this.state.wrong!==null){
            message = (<span style={{color:'darkgreen',fontSize:'1.5rem'}}>Correct</span>);
        }   
        
        if(this.state.difficulty && !this.state.isOver){
            gameView = (
                <Aux>
                    <h1>{this.state.gameColor}</h1>
                    {message}
                    <ColorDivs 
                        difficulty={LEVELS[this.state.difficulty]}
                        colorDivClicked={this.colorDivClickHandler}
                        randomColors={this.state.colors}
                        />
                </Aux>);
        }
        else if(!this.state.isOver){
            gameView = (
                <Aux>
                    <h1 style={{color:'salmon',marginTop:'64px'}}>Welcome</h1>
                    <h2 style={{color:'salmon'}}>To start the game, Please choose a difficulty level..</h2>
                </Aux>);    
        }
        else if(this.state.isOver && this.state.chances !== 0){
            gameView = (
                <Aux>
                    <h1 style={{color:'salmon',marginTop:'64px'}}>You Won!!</h1>
                    <h2 style={{color:'salmon'}}>To start again, Please click Reset</h2>
                </Aux>);
        }
        else{
            gameView = (
                <Aux>
                    <h1 style={{color:'salmon',marginTop:'64px'}}>You Lose!!</h1>
                    <h2 style={{color:'salmon'}}>Chances Exhausted..</h2>
                    <h3 style={{color:'salmon'}}>To start again, Please click Reset</h3>
                </Aux>);
        }
        return(
            <div>
                <DifficultyLevelBar 
                    chances   = {this.state.chances} 
                    levelClick={this.levelClickHandler}
                    resetClick={this.resetGameHandler}/>
                {gameView}
            </div>
        );
    }
}

export default GameView;
