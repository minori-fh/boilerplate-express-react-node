import React from 'react';
import './style.css';


function GuestPage(props){

    return(
       <div className="page" id="guestPage">
        <div className="title">01. guestPage</div>
        <div>
            <button onClick={props.goToUserPage}>click to <span className="code">setState({'{'}guestPage: false{'}'})</span> and go to userPage</button>   
        </div>
       </div> 
    )
}

export default GuestPage;