import React, { Component } from "react";
import { MDBNavbar,MDBRow,MDBCol,MDBInput, MDBIcon, MDBNavbarBrand, MDBNavbarNav,MDBCardBody,MDBCard, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBCardHeader, MDBModalFooter } from "mdbreact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class NavbarPage extends Component {
state = {
  isOpen: false,
  modal: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen 
  });
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    
      <MDBNavbar color="default-color" dark expand="md">
      <Switch>
        <MDBNavbarBrand>
          <strong className="white-text">E-Card</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/registration">Registration</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/profile">Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/directory">Directory</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBContainer>
      <MDBBtn onClick={this.toggle}>Sign Up</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        
        
          
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                
                  >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          
        
        
        
      </MDBModal>
    </MDBContainer>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </Switch>  
      </MDBNavbar>
      
    );
  }
        
}

export default NavbarPage;