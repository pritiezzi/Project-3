import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";


const TablePage = (props) => {
  const data_panel = {
    columns: [
      {
        'label': <MDBInput label=" " type="checkbox" id="checkbox5" />,
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'First Name',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Last Name',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Location',
        'field': 'Location',
        'sort': 'asc'
      },
      {
        'label': 'Title',
        'field': 'Title',
        'sort': 'asc'
      },
      {
        'label': 'Github',
        'field': 'Github',
        'sort': 'asc'
      },
      {
        'label': 'Linkedin',
        'field': 'Linkedin',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox6" />,
        'first': 'Priscila',
        'last': 'Tiezzi',
        'Location': 'Nsshville',
        'Title': 'Front-End developer',
        'Github': 'https://github.com/pritiezzi',
        'Linkedin': 'https://www.linkedin.com/in/priscila-tiezzi-927a18165/'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox7" />,
        'first': 'Priscila',
        'last': 'Tiezzi',
        'Location': 'Nsshville',
        'Title': 'Front-End developer',
        'Github': 'https://github.com/pritiezzi',
        'Linkedin': 'https://www.linkedin.com/in/priscila-tiezzi-927a18165/'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox8" />,
        'first': 'Priscila',
        'last': 'Tiezzi',
        'Location': 'Nsshville',
        'Title': 'Front-End developer',
        'Github': 'https://github.com/pritiezzi',
        'Linkedin': 'https://www.linkedin.com/in/priscila-tiezzi-927a18165/'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox9" />,
        'first': 'Priscila',
        'last': 'Tiezzi',
        'Location': 'Nsshville',
        'Title': 'Front-End developer',
        'Github': 'https://github.com/pritiezzi',
        'Linkedin': 'https://www.linkedin.com/in/priscila-tiezzi-927a18165/'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'Priscila',
        'last': 'Tiezzi',
        'Location': 'Nsshville',
        'Title': 'Front-End developer',
        'Github': 'https://github.com/pritiezzi',
        'Linkedin': 'https://www.linkedin.com/in/priscila-tiezzi-927a18165/'
      }
    ]
  };

  return(
    <MDBCard narrow>
      <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-th-large mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-columns mt-0"></i>
          </MDBBtn>
        </div>
        <a href="#" className="white-text mx-3">E-card</a>
        <div>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-pencil-alt mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fas fa-times mt-0"></i>
          </MDBBtn>
          <MDBBtn outline rounded size="sm" color="white" className="px-2">
            <i className="fa fa-info-circle mt-0"></i>
          </MDBBtn>
        </div>
      </MDBCardHeader>
      <MDBCardBody cascade>
        <MDBTable btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
};

import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBContainer } from "mdbreact";

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

export default TablePage;
