import React from "react";
class Child extends React.Component{

render(){
    return(
        <>
        <h1>{this.props.data}</h1>
        </>
    )
}

}
export default Child;