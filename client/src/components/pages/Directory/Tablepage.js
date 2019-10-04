import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead  } from 'mdbreact';
// import 'mdbreact/dist/css/mdb.css';

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
        <a href="#" className="white-text mx-3">Table name</a>
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

export default TablePage;