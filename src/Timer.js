import React, { Component } from 'react'

 class Timer extends Component {
     constructor(props) {
         super(props)
         this.state = {
            clock:0  
         }
     }
     ticker=()=>{
        this.setState({
            clock:new Date()-this.props.start
        })
     }

     componentDidMount(){
        setInterval(this.ticker,1000)
    }
     
    render() {
        let clock = Math.round(this.state.clock/1000)
        return (
            <div>
               <h3>Welcome To Time App built in React js: </h3>
               <span>{clock}</span>
               <p>Seconds</p>
            </div>
        )
    }
}

export default Timer
