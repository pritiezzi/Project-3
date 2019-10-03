import React from 'react';
import { MDBInput } from 'mdbreact';
import { MDBCard, MDBCardBody,MDBCol, MDBRow, MDBContainer  } from 'mdbreact';

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
    ]}
  };
  
  export default TablePage; 