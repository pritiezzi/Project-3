import React from 'react';
import { MDBCard, MDBCardBody,MDBCol, MDBRow, MDBContainer  } from 'mdbreact';



const PanelPage = () => {
    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mb-4">
          <MDBCard color="indigo" text="white" className="text-center">
            <MDBCardBody>
              Very interesting conversation
            </MDBCardBody>
          </MDBCard>
    
          <MDBCard color="pink lighten-2" text="white" className="text-center">
            <MDBCardBody>
              Great asset for future business
            </MDBCardBody>
          </MDBCard>
    
          <MDBCard color="info-color" text="white" className="text-center">
            <MDBCardBody>
             Think twice before contacting
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    
        <MDBCol md="6">
          <MDBCard color="red lighten-1" text="white" className="text-center">
            <MDBCardBody>
              Alert! Please don't forget to contact 
            </MDBCardBody>
          </MDBCard>
    
          <MDBCard color="mdb-color lighten-2" text="white" className="text-center">
            <MDBCardBody>
              Don't ever contact
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
    };
    
    export default PanelPage;