import React from "react";

import Home from "./home"
import Navbar from "../components/Navbar";
import LoginButtons from "../components/Buttons/button"
function logout(){
   fetch("/logout").then(function(){window.location.href="/"})
}
       


class Profile extends React.Component {
    constructor(){
        super();
        this.state={
           name:"",
           id:"",
           logged:false
        }
    }
    componentDidMount() {
        fetch('/loggedin')
            .then((res) => res.json())
            .then((user) => {
              return(this.setState({name:user.name,id:user.id,logged:true}))
            })
    }
    render() {
        return <div>
            <Navbar isLoggedIn={true} hasId={this.state.id ? this.state.id : null} loginName={this.state.name} loginClick={logout}>
            
             </Navbar>
                
           
            <Home  UserId1={this.state.id} UserId={this.state.id}/>
        </div>; 
    }
}
export default Profile;