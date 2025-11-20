import React, { Children } from "react"
import Child from'./Child.jsx'
export default class Parent extends React.Component{
    constructor(){
        super()
        this.state={
            user:"Default User",
            count:0
        }
    }
ChangeName=()=>{
    this.setState({user:"Naresh"})
}
Increment=()=>{
    this.setState({count:this.state.count+1})
}
Decrement=()=>{
   if(this.state.count>0){
     this.setState({count:this.state.count-1})
   }
}
    render(){
        return(
            <>
            {/* <h1>Hi EveryOne {this.state.user}</h1> */}
           
            {/* <Child data={this.state.user} /> */}
              
            {/* Topic :- Children Props */}
            <Child count={this.state.count}>
             <p>This content From Parent</p>
                {this.state.user}
                  {this.state.count}
                   <br />
             <button style={{}} onClick={()=>{this.ChangeName()}} >Change Name</button><br />
             <button  onClick={()=>{this.Increment()}} >Increment</button><br />
              <button  onClick={()=>{this.Decrement()}} >Decrement</button>
           </Child>
           
           </>
   
        )
    }
}