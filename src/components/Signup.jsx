import React, { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Navbar";
import "./Form.css";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("resume", resume);

    try {
      await axios.post(
        "https://jobvistabackend-1.onrender.com/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("Registration successful! Redirecting to login...");
      setTimeout(() => (window.location.href = "/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage("User already registered. Please log in.");
      } else {
        setMessage("An error occurred during registration.");
      }
    }
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <Navbar />
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
            Find Your Dream Job <br />
            <span
              className="text-light"
              style={{ color: "hsl(218, 81%, 75%)" }}
            >
              with us :)
            </span>
          </h1>
          <p className="px-3 text-light">
            Discover the perfect job that aligns with your skills and career
            goals.
          </p>
        </MDBCol>
        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="custom-file-input-container mb-4">
                  <label
                    className="custom-file-input-label"
                    htmlFor="resumeUpload"
                  >
                    <MDBIcon icon="file-upload" className="file-icon" />
                    <span className="file-text">Upload Resume</span>
                    <input
                      id="resumeUpload"
                      type="file"
                      accept=".pdf, .doc, .docx"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our JobVista"
                  />
                </div>
                <MDBBtn className="w-100 mb-4" size="md" type="submit">
                  Sign Up
                </MDBBtn>
                <div className="text-center">
                  <p>Already have an account?</p>
                  <Link to="/login">
                    <MDBBtn color="primary">Login</MDBBtn>
                  </Link>
                </div>
                <div className="text-center mt-4">
                  <p>Or sign up with</p>
                  <div className="d-flex justify-content-center">
                    <MDBBtn className="social-btn google mx-3">
                      <MDBIcon fab icon="google" />
                    </MDBBtn>
                    <MDBBtn className="social-btn linkedin mx-3">
                      <MDBIcon fab icon="linkedin" />
                    </MDBBtn>
                    <MDBBtn className="social-btn github mx-3">
                      <MDBIcon fab icon="github" />
                    </MDBBtn>
                  </div>
                </div>
                {message && (
                  <div className="alert alert-info mt-4">{message}</div>
                )}
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
