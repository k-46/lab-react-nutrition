import React, { Component } from 'react'
import List from './List'

export default class FoodBox extends Component {

    constructor(props){
        super(props)

        this.state={
            count:0,
            totalAmount:0
        }
    }

    handleTotal = ()=>{
        this.setState({totalAmount:this.state.count * this.props.food.cal})
    }

    handleCount = (value)=>{
        this.setState({count:value})
    }
    handleReset = ()=>{
        this.setState({
            count:0,
            totalAmount:0
        })
        
    }


  render() {
    return (
      <div id='foodBox'>
        <img src={this.props.food.img} alt="" />

        <h1>
            {this.props.food.name}
        </h1>
        <p>
            {this.props.food.cal}
        </p>

        <div>
            <input type="number" value={this.state.count} placeholder='Enter' min={0}  onChange={(e)=>this.handleCount(e.target.value)} />
            <button onClick={this.handleTotal}>
                Add
            </button>
        </div>

        <List handleReset={this.handleReset} count={this.state.count} name={this.props.food.name} totalAmount={this.state.totalAmount}  />
      </div>
    )
  }
}
