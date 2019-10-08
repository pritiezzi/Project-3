import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import "./Directory.css";


const PanelPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6" className="mb-6">
      <MDBCard color="indigo lighten-2" text="white" className="text-center">
        <MDBCardBody>
        Very intersesting contact/ conversation.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="indigo lighten-1" text="white" className="text-center">
        <MDBCardBody>
        Great asset for future business.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="indigo" text="white" className="text-center">
        <MDBCardBody>
        Keep in touch! You never know.
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md="6">
      <MDBCard color="indigo darken-1" text="white" className="text-center">
        <MDBCardBody>
        Alert! Don't forget to reach out.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color=" indigo darken-2" text="white" className="text-center">
        <MDBCardBody>
        Think twice before contacting.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="indigo darken-3" text="white" className="text-center">
        <MDBCardBody>
        No, definatly no. Block. Run.
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default PanelPage;
