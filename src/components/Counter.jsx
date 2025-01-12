import React from 'react'
import attack from "../images/attack.png"
import defend from "../images/defend.png"

export default class Counter extends React.Component{
 
  constructor(props){
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefend = this.handleDefend.bind(this);
    this.state = {
      count: 0
    }
  }


  handleAttack(){
    this.setState((previousState)=> {
      return {
        count: previousState.count + 1
      }
    })
    // this.setState({count: this.state.count + 100});
    // this.setState({count: this.state.count + 10})
  }

  handleDefend(){
    // alert("Defend clicked.");
    // this.setState({count: this.state.count - 1});
    this.setState((previousState)=>{
      return {
        count: previousState.count -1
      }
    })
  }


  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play: </p>
        <h3>Game Status: </h3>

        <div className="col-6 col-md-3 offset-md-3">
            <img src={attack} alt="attack image" style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green"
            }} className='p-4 rounded' onClick={this.handleAttack} />
        </div>
        <div className="col-6 col-md-3 offset-md-3">
            <img src={defend} alt="defend image" style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green"
            }} className='p-4 rounded' onClick={this.handleDefend} />
        </div>      
        <div className="col-12 col-md-4 offset-md-4">
            <button className="btn btn-secondary w-100 mt-2">Random Play</button>
        </div>
      </div>
    )
  }
}