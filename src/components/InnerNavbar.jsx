import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css'; // Reuse existing custom CSS for styling

const InnerNavbar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/'); // Redirect to the signup page
  };

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>JobVista</Navbar.Brand>
        <Navbar.Toggle aria-controls="inner-navbar-nav" />
        <Navbar.Collapse id="inner-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>Profile</Nav.Link>
            <Nav.Link onClick={() => navigate('/jobs')} style={{ cursor: 'pointer' }}>Jobs</Nav.Link>
            <Nav.Link onClick={() => navigate('/messages')} style={{ cursor: 'pointer' }}>Messages</Nav.Link>
            <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default InnerNavbar;
