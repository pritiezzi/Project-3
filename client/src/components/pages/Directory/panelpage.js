
import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";

const PanelPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6" className="mb-6">
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

      <MDBCard color="teal accent-3" text="white" className="text-center">
        <MDBCardBody>
        Keep in touch! You never know.
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md="6">
      <MDBCard color="purple" text="white" className="text-center">
        <MDBCardBody>
        Alert! Don't forget to reach out.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="red darken-4" text="white" className="text-center">
        <MDBCardBody>
        Think twice before contacting.
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="grey darken-4" text="white" className="text-center">
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



// import React from 'react';
// import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";

// const PanelPage = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6" className="mb-4">
//       <MDBCard color="danger-color" text="white" className="text-center">
//         <MDBCardBody>
//         Very intersesting contact/ conversation.
//         </MDBCardBody>
//       </MDBCard>

//       <MDBCard color="pink lighten-2" text="white" className="text-center">
//         <MDBCardBody>
//         Great asset for future business.   
//         </MDBCardBody>
//       </MDBCard>

//       <MDBCard color="success-color" text="white" className="text-center">
//         <MDBCardBody>
//         Keep in touch! You never know.
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>

//     <MDBCol md="6">
//       <MDBCard color="red lighten-1" text="white" className="text-center">
//         <MDBCardBody>
//         Alert! Don't forget to reach out.
//         </MDBCardBody>
//       </MDBCard>

//       <MDBCard color="default-color" text="white" className="text-center">
//         <MDBCardBody>
//         Think twice before contacting.
//         </MDBCardBody>
//       </MDBCard>

//       <MDBCard color="primary-color" text="white" className="text-center">
//         <MDBCardBody>
//         No, definatly no. Block. Run.
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// );
// };

// export default PanelPage;