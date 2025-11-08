import React from 'react'
class MountingPhase extends React.Component{
    //1
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
    }    
    //2
    static getDerivedStateFromProps=()=>{
        return {color: "blue"}  //to return the object
    } 

    //3
    render(){
        return(
            <div>
                <p> Fav color : {this.state.color}</p>
            </div>
        )
    }    
    //4
    
    componentDidMount=()=>{
        //call to server side API
        //modify state and re-render
        this.setState({color: "green"});
        //console.log("mounted")
    }   
}

export {MountingPhase};