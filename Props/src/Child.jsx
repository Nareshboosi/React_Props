import React from "react";
class Child extends React.Component{

render(){
    return(
        <>
        <h1 style={{textAlign:"center",color:(this.props.count>0 & this.props.count<10)?"green":(this.props.count>10?"blue":"red")}}>{this.props.children}</h1>
        </>
    )
}

}
export default Child;