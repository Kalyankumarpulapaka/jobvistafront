import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import './route.css'; // Custom CSS for styling
import InnerNavbar from './InnerNavbar';
const Jobs = () => {
  const jobList = [
    { title: "Frontend Developer", company: "ABC Corp", location: "Remote", salary: "$80,000", posted: "2 days ago" },
    { title: "Backend Developer", company: "XYZ Inc", location: "San Francisco, CA", salary: "$100,000", posted: "5 days ago" },
    { title: "Full Stack Developer", company: "Tech Solutions", location: "New York, NY", salary: "$120,000", posted: "1 week ago" },
  ];

  return (
    <MDBContainer fluid className="jobs-container p-5">
       <InnerNavbar/>
      <MDBRow className="mb-4">
        <MDBCol md="12" className="text-center">
          <h2>Available Jobs</h2>
        </MDBCol>
      </MDBRow>
      {jobList.map((job, index) => (
        <MDBRow key={index} className="mb-4">
          <MDBCol md="12">
            <MDBCard className="job-card">
              <MDBCardBody>
                <h4>{job.title}</h4>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Posted:</strong> {job.posted}</p>
                <MDBBtn color="primary">Apply Now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      ))}
    </MDBContainer>
  );
};

export default Jobs;
