import React from 'react';
import logo from './logo.svg';
import './App.css';


class Island {
  constructor(){
      this.wood = 0;
      this.water = 0;
      this.food = 0;
      
  }

  setWood(a){
      this.wood = this.wood - a;
      return this.wood;
  }
  setWater(b){
      this.water = this.water - b;
      return this.water;
  }
  setFood(c){
      this.food = this.food - c;
      return this.food;
  }


}

class Human{
  constructor(){
      this.wood = 0;
      this.water = 0;
      this.food = 0;
      
  }

  setWood(a){
      this.wood = this.wood + a;
      return this.wood;
  }
  setWater(b){
      this.water =  b;
      return this.water;
  }
  setFood(c){
      this.food = c;
      return this.food;
  }
}

/*function All(){
  
}*/
let island = new Island();
let human = new Human();

class IslandApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clickedText : human.wood
    };
  }
  handleClick = () =>{
    this.setState({clickedText: human.setWood(50)})
    return island.wood;
  }
  render(){
    const { clickedText } = this.state;
    return (
      <div className='app'>
    <div className='island-app'>
    <h1> Древесина - {island.wood} </h1>
    <h1> Вода - {island.water}</h1>
    <h1> Еда - {island.food}</h1>
    </div>
    <div className='human-app'>
      <h1> Получено древесины - {clickedText}</h1> 
      <h1> Получено воды - {human.water}</h1>
      <h1> Получено еды - {human.food}</h1>
    </div> 
      <button onClick={() => this.handleClick()}>Использовать древесину</button>
    <button>Использовать воду</button>
    <button>Использовать еду</button>
   </div>
    );
  }
  
}

export default IslandApp;
