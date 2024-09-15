import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import './route.css'; // Custom CSS for styling
import InnerNavbar from './InnerNavbar';
const Messages = () => {
  const messages = [
    { from: "Recruiter A", subject: "Job Offer for Frontend Developer", date: "1 day ago", content: "We would like to invite you for an interview..." },
    { from: "Recruiter B", subject: "Position at ABC Corp", date: "3 days ago", content: "We have an exciting role for you..." },
  ];

  return (
    <MDBContainer fluid className="messages-container p-5">
       <InnerNavbar/>
      <MDBRow className="mb-4">
        <MDBCol md="12" className="text-center">
          <h2>Messages</h2>
        </MDBCol>
      </MDBRow>
      {messages.map((message, index) => (
        <MDBRow key={index} className="mb-4">
          <MDBCol md="12">
            <MDBCard className="message-card">
              <MDBCardBody>
                <h5>{message.subject}</h5>
                <p><strong>From:</strong> {message.from}</p>
                <p><strong>Date:</strong> {message.date}</p>
                <p>{message.content}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      ))}
    </MDBContainer>
  );
};

export default Messages;
