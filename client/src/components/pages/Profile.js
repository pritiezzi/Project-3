import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBAvatar} from 'mdbreact';


const Profile = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
      <div class="view view-cascade overlay">
      <img class="card-img" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt="Card image cap"/>

    </div>        
    <MDBCardBody>
          <MDBCardTitle active>Bryan Adams</MDBCardTitle>
          <h6 class="info-color">Nashville,TN</h6>
          <h6 class="font-weight-bold indigo-text py-2">Full Stack Developer</h6>
          <MDBCardText>
           
          </MDBCardText>
          
          <p><a type="button"><i class="fas fa-tv fa-lg"></i></a>Website:</p>

          <p><a type="button"><i class="far fa-envelope fa-lg"></i></a>Email:</p>

          <p><a type="button"><i class="fas fa-phone-alt fa-lg"></i></a>Phone:</p>
          
          <p><a type="button"><i class="fab fa-github fa-lg"></i></a>Github:</p>
    
          <p><a type="button"><i class="fab fa-linkedin-in fa-lg"></i></a>Linkedin:</p>
    
          
        </MDBCardBody>
        <img class="card-img" src="https://qrtag.net/api/qr_1.svg?url=https://www.qrtag.net" alt="Card image cap"/>
      </MDBCard>
    </MDBCol>
  )
}

export default Profile;