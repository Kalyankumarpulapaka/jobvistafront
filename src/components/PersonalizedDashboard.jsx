import React from 'react';
import InnerNavbar from './InnerNavbar'; // Inner Navbar
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './Dashboard.css'; // Add any custom styles if needed

const PersonalizedDashboard = () => {
  return (
    <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden">
      <InnerNavbar /> {/* Inner Navbar */}
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
            Welcome Back, User!
          </h1>
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <p>Here's your personalized dashboard.</p>
              {/* Add more content and features here */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PersonalizedDashboard;
