import React from 'react';
import logo from './logo.svg';
import './App.css';


class Island {
  constructor(adelyarr){
      this.wood = adelyarr[0];
      this.water = adelyarr[1];
      this.food = adelyarr[2];
      
  }

  setWood(a){
      this.wood = this.wood - a;
      if(this.wood >=0){
      return this.wood;
    }else{
      this.wood = 0;
      return this.wood;
    }
  }
  setWater(b){
      this.water = this.water - b;
      if(this.water>=0){
        return this.water;
      }else{
        this.water = 0;
        return this.water;
      }
  }
  setFood(c){
      this.food = this.food - c;
      if(this.food>=0){
        return this.food;
      }else{
        this.food = 0;
        return this.food;
      }
  }


}

class Human{
  constructor(var1,var2,var3){
      this.wood = var1;
      this.water = var2;
      this.food = var3;
      
  }

  setWood(a){
      this.wood = this.wood + a;
      if(this.wood <= adelyarr[0]){
      return this.wood;
      } else{
        this.wood = adelyarr[0];
        return this.wood;
      }
  }
  setWater(b){
      this.water =  this.water + b;
      if(this.water <= adelyarr[1]){
        return this.water;
        } else{
          this.water = adelyarr[1];
          return this.water;
        }
  }
  setFood(c){
      this.food = this.food  + c;
      if(this.food <= adelyarr[2]){
        return this.food;
        } else{
          this.food = adelyarr[2];
          return this.food;
        }
  }
}

/*function All(){

}*/

let adelyarr = [1000, 2000, 500];
let island = new Island(adelyarr);
let human = new Human(0,0,0);

class IslandApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickedText : human.wood,
      clickedText2 : island.wood,
      clickedWater: island.wood,
      clickedWater2: human.wood,
      clickedFood: island.wood,
      clickedFood2: human.wood
    };
  }
  handleClick = () => { 
    this.setState({
      clickedText: human.setWood(50), 
      clickedText2: island.setWood(50)
    });
  }
  handleClick2 = () => {
    this.setState({
    clickedWater: island.setWater(100),
    clickedWater2: human.setWater(100) 
  });
  }
  handleClick3 = () => {
    this.setState({
      clickedFood: island.setFood(50),
      clickedFood2:human.setFood(50)
    });
  }
  render(){
    const { clickedText, clickedText2 } = this.state;
    const{ clickedWater, clickedWater2 } = this.state;
    const { clickedFood, clickedFood2 } = this.state;
    return (
      <div className='app'>
    <div className='island-app'>
    <h1> Древесина - {clickedText2}</h1>
    <h1> Вода - {clickedWater}</h1>
    <h1> Еда - {clickedFood}</h1>
    </div>
    <div className='human-app'>
      <h1> Получено древесины - {clickedText}</h1> 
      <h1> Получено воды - {clickedWater2}</h1>
      <h1> Получено еды - {clickedFood2}</h1>
    </div> 
      <button onClick={() => this.handleClick()}>Использовать древесину</button>
    <button onClick = {() => this.handleClick2()}>Использовать воду</button>
    <button onClick = {() => this.handleClick3()}>Использовать еду </button>
   </div>
    );
  };
  
}

export default IslandApp;
