// your Bomb code here!
import React,{Component} from 'react'

class Bomb extends  Component{
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    boom = () =>{
        if(this.state.secondsLeft === 0){
            return 'Boom!'
        }else{
            return`${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
    render(){
        return(
            <div>
                {this.boom()}
            </div>
        )
    }

}

export default Bomb