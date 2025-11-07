import { Component } from "react";

class ClsProp extends Component{

    render(){
        
        let n = this.props.num;
        let fact = 1;
        for(let i=1;i<=n;i++){
            fact*=i;
        }

        return(
            <>
                <h1>Factorial of {this.props.num} is {fact}</h1>
            </>
        )

    }

}

export {ClsProp};