import React, {Component} from 'react';
import './style.css';

class UserPage extends Component {

    constructor(props){
        super()
        this.state = {color: "pink"}
    }

    setColor = (event) => {
        let chosenColor = event.currentTarget.getAttribute("data-color")
        this.setState({color: chosenColor})
    }


    render(){

    let colorScheme = {pink: "rgb(238, 159, 172)", blue: "rgb(144, 212, 221)", green: "rgb(161, 212, 172)", yellow: "rgb(231, 235, 177)", purple: "rgb(216, 204, 245)"}
    let color = colorScheme[this.state.color]

    return(
        <div className="page" id="userPage">
        <div className="half-panel" id="left-panel">
            <div className="title">02. userPage</div>
            <div>
                <button onClick={this.props.goToGuestPage}>click to <span className="code">setState({'{'}guestPage:true{'}'})</span> and go to guestPage</button> 
            </div>
        </div>
        <div style={{backgroundColor: color}} className="half-panel" id="right-panel">
            <button onClick={this.setColor} className="color-button h-pink" data-color="pink"><span className="code">setState({'{'}color: pink{'}'})</span></button>
            <button onClick={this.setColor} className="color-button h-blue" data-color="blue"><span className="code">setState({'{'}color: blue{'}'})</span></button>
            <button onClick={this.setColor} className="color-button h-green" data-color="green"><span className="code">setState({'{'}color: green{'}'})</span></button>
            <button onClick={this.setColor} className="color-button h-yellow" data-color="yellow"><span className="code">setState({'{'}color: yellow{'}'})</span></button>
            <button onClick={this.setColor} className="color-button h-purple" data-color="purple"><span className="code">setState({'{'}color: purple{'}'})</span></button>
        </div>
    </div>  
    )
    }
}

export default UserPage