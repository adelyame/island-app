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
      
      <div className = 'wrapper'>
      <div className = 'main'>
      <div className='app'>
      <img className="img" src="https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1477284/600/400/m2/fpnw/wm1/island-.jpg?1469308797&s=44f60086520bb9fd286a49f4e8deced7"></img>
    <div className='island-app'>
    
    <h1>Ресурсы острова</h1>
    <h2> Древесина - {clickedText2}</h2>
    <h2> Вода - {clickedWater}</h2>
    <h2> Еда - {clickedFood}</h2>
    </div>
    <div className='human-app'>
      <h1>Преобретенные ресурсы</h1>
      <h2> Получено древесины - {clickedText}</h2> 
      <h2> Получено воды - {clickedWater2}</h2>
      <h2> Получено еды - {clickedFood2}</h2>
    </div> </div><div className='button'>
    <button onClick={() => this.handleClick()}>Использовать древесину</button>
    <button onClick = {() => this.handleClick2()}>Использовать воду</button>
    <button onClick = {() => this.handleClick3()}>Использовать еду </button>
      </div>
   </div>
   </div>
    );
  };
  
}

export default IslandApp;
