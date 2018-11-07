import React from "react";
import "./Navbar.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "../Modal/signIn"
import SignIn from "../Modal/signIn";
import LoginButtons from "../Buttons/button"



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class SimpleNavbar extends React.Component{
  constructor(props){
    super(props);
    this.handleLoggedin = this.handleLoggedin.bind(this);
    this.handleSignin = this.handleSignin.bind(this);
    this.state = {isLoggedIn: false};
}
handleLoggedin(){
  this.setState({isLoggedIn:true})
}
handleSignin(){
  this.setState({isLoggedIn:false})
}
render(){
  let signOrLogin;
  
  if (!this.props.hasId){
    signOrLogin=<SignIn/>
  }
  else
  {
    signOrLogin=<LoginButtons 
    id ={this.props.loginId} 
    name={this.props.loginName} 
    click={this.props.loginClick}/>
  }
  return(
  <Navbar  isLoggedIn={false} inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Cook Express</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>

    {signOrLogin}

    
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  )}

};
  
  export default SimpleNavbar;