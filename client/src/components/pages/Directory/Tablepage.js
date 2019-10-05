
import React from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer  } from 'mdbreact';
import "./Directory.css";

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
        'label': 'GitHub',
        'field': 'GitHub',
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
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox7" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox8" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox9" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@md',
      }
    ]
  };

  return(
    <MDBContainer>  
    <MDBCard narrow>

      <MDBCardHeader className="view view-cascade gradient-card-header py-2 mx-4 mb-3">
      <div className="white-text text-center mx-3"> <a href="#" className="white-text text-center mx-3">Contacts</a></div>
        
      </MDBCardHeader>
    
      <MDBCardBody className="bg-info" cascade>
        <MDBTable className="bg-info" btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>   
    </MDBCard>
  
    </MDBContainer>

   
  );
};

export default TablePage;