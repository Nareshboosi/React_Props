import React from "react"
import Child from'./Child.jsx'
export default class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            user:"Default User"
        }
    }
ChangeName=()=>{
    this.setState({user:"Naresh"})
}
    render(){
        return(
            <>
            <h1>Hi EveryOne {this.state.user}</h1>
            <button onClick={()=>{this.ChangeName()}}>Change Name</button>
            <Child data={this.state.user}/>
            </>
        )
    }
}