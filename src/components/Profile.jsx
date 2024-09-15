import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import './route.css'; // Custom CSS for styling
import InnerNavbar from './InnerNavbar';

const Profile = () => {
  return (
    <MDBContainer fluid className="profile-container p-5">
      <InnerNavbar/>
      <MDBRow>
        <MDBCol md="4" className="mb-4">
          <MDBCard>
            <MDBCardBody className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="profile-pic"
                className="rounded-circle img-fluid mb-3"
              />
              <h3>John Doe</h3>
              <p>Software Engineer</p>
              <MDBBtn outline color="primary" className="mb-2">Edit Profile</MDBBtn>
              <MDBBtn outline color="secondary">Upload Resume</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <h4>Personal Information</h4>
              <p><strong>Email:</strong> johndoe@example.com</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
              <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
              <hr />
              <h4>Skills</h4>
              <p>JavaScript, React, Node.js, MongoDB, CSS</p>
              <hr />
              <h4>Work Experience</h4>
              <p>Software Engineer at XYZ Corp, 2021 - Present</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Profile;
