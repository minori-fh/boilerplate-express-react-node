import React, {Component} from 'react';
import GuestPage from './pages/guest';
import UserPage from './pages/user'


import './App.css';

class App extends Component {

  constructor(props){
    super()
    this.state = {
      guestPage: true, 
    }
  }

  handleGPClick = () => {
    this.setState({guestPage: false})
  }

  handleUPClick = () => {
    this.setState({guestPage: true})
  }

  render(){
    console.log(this)
    return(
    <div>
      {(this.state.guestPage ? 
        <GuestPage goToUserPage={this.handleGPClick}/> : <UserPage goToGuestPage={this.handleUPClick}/>)}
    </div>
    )
  }
  
}

export default App;
