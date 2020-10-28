// your ImageSlider code here!
import React,{Component} from 'react'

class ImageSlider extends  Component{

    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0 
        }
    }
    render(){
        return(
            <div>
               I am on slide 0 
            </div>
        )
    }

}

export default ImageSlider