import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import MyNavbar from './Navbar';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://jobvistabackend-1.onrender.com/api/auth/login", {
        email,
        password,
      });
      setMessage("Login successful!");
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (error) {
      setMessage("An error occurred during login.");
    }
  };

  return (
    <MDBContainer fluid className="p-4 background-radial-gradient overflow-hidden">
      <MyNavbar />
      <MDBRow>
        <MDBCol md="6" className="text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-light">
            Welcome Back! <br />
            <span className="text-light" style={{ color: "hsl(218, 81%, 75%)" }}>
              Login to continue
            </span>
          </h1>
          <p className="px-3 text-light">
            Please log in to access your account and manage your job applications.
          </p>
        </MDBCol>
        <MDBCol md="6" className="position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <form onSubmit={handleLogin}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <MDBBtn className="w-100 mb-4" size="md" type="submit">
                  Login
                </MDBBtn>
                {message && <div className="alert alert-info">{message}</div>}
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
