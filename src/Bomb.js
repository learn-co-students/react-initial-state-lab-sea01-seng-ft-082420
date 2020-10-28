import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    explosion = () => {
        if (this.state.secondsLeft === 0) {
            return <div>Boom!</div>
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }
    
    render () {
        return (
            <div>
                {this.explosion()}
            </div>
        )
    }
}
