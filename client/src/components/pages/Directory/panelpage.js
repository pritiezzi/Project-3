
import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";
// import 'mdbreact/dist/css/mdb.css';

const panelpage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6" className="mb-4">
      <MDBCard color="indigo" text="white" className="text-center">
        <MDBCardBody>
         Very intersesting contact/ conversation.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="pink lighten-2" text="white" className="text-center">
        <MDBCardBody>
          Great asset for future business.       
          </MDBCardBody>
      </MDBCard>

      <MDBCard color="info-color" text="white" className="text-center">
        <MDBCardBody>
          Keep in touch! You never know.
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md="6">
      <MDBCard color="red lighten-1" text="white" className="text-center">
        <MDBCardBody>
          Alert! Don't forget to reach out.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="primary-color" text="white" className="text-center">
        <MDBCardBody>
          Think twice before contacting.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="secondary-color" text="white" className="text-center">
        <MDBCardBody>
          No, definatly no. Block. Run.
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default panelpage;