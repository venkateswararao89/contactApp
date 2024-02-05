import React, { Component } from 'react'
import { connect } from 'react-redux'
import {buyLaptop, buyMobile } from './actions/indrx'

 

export class Shop extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to v shop</h1>
        <div>
            <p>Dell inspiron Laptop</p>
            <p>Avilible:{this.props.numOfLaptops}</p>
            <button onClick={this.props.buyLaptop}>Buy</button>
        </div>

        <div>
            <p>Samsung Mobile</p>
            <p>Avilible:{this.props.numOfMobiles}</p>
            <button onClick={this.props.buyMobile}>Buy</button>
        </div>
      </div>
     ) 
    }
    
  }
const mapStateProps  = (state) =>{
    return {
        numOfLaptops:state.laptops.numOfLaptops,
        numOfMobiles:state.mobiles.numOfMobiles,
    }
}
const mapDispatchtoProps = (dispatch) =>{
    return{
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile:() => dispatch(buyMobile())
    }
}
export default connect(mapStateProps,mapDispatchtoProps) (Shop);