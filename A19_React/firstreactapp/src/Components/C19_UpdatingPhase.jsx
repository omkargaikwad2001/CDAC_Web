import React from 'react'
class UpdatingPhase extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
    }
    //1
    /*static getDerivedStateFromProps=()=>{
        return {color: "blue"}  //to return the object
    }*/
    //2 shouldComponentUpdate  //return boolean

    //4
    getSnapshotBeforeUpdate=(prevP,prevS)=>{
        console.log("before update : "+prevS.color)  //before update
        return null;
    }

    //5
    componentDidUpdate=(prevP,prevS)=>{
        console.log("After update : "+this.state.color);   //after update
    }


    //3
    render(){
        return(
            <div>
                <p> Fav color : {this.state.color}</p>
                <button onClick={()=>{this.setState({color: "yellow"})}}>Click to change</button>
            </div>
        )
    }

   
}

export {UpdatingPhase};