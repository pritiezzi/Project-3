import React, { Component } from "react";
import { MDBJumbotron, MDBContainer, } from "mdbreact";
class Home extends Component {
 render() {
 return (
   <MDBJumbotron fluid style={{ backgroundImage: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg) }}>
     <MDBContainer>
     <h1>Home Page</h1>
     <p>
     Make your life easier by downloading our application and not only designing your own business card, but also scanning other potential business contacts making them readily available and organized as needed.
     What is our app a great idea?
     Simple answer. You no longer have to add any business cards to any event or conference. It is a paperless enviroment friendly and will definetly keep you organized and ready to go.
     </p>
     </MDBContainer>
   </MDBJumbotron>
 )
 }
export default Home;
