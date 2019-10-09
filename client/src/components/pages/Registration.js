import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Registration.css";
const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="black-text">
              <MDBInput
                label="User_name"
                icon="user"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Title"
                icon="hard-hat"
                group
                type="email-text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Location"
                icon="map-marker alt"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Phone"
                icon="phone-square alt"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
              />
                <MDBInput
                label="Email"
                 icon="exclamation-triangle"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
               />
                <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
               />
                <MDBInput
                label="Website"
                icon="tv"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
              />
                <MDBInput
                label="LinkedIn"
                icon="linkedin"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
              />
                <MDBInput
                label="Github"
                icon="github"
                group
                type="black-text"
                validate
                error="wrong"
                success="right"
              />
                <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password-text"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="black-text" href="/profile">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;