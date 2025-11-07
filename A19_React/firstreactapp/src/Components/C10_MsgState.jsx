import { Component } from "react";

class Msg extends Component{

    constructor(props){ 
        super(props);
        this.state={msg:"Welcome"}
    }

    render(){

        return(
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>{
                    this.setState({msg:"Hello"})
                }}>Change</button>
            </>
        )

    }

}

export {Msg};