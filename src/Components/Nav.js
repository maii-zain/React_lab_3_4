import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function AppNavbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const handleHomeClick = () => {
    navigate('/'); 
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: 'gray' }}>
      <Container>
        <Navbar.Brand onClick={handleHomeClick} style={{ fontSize: '200%', color: 'orange', fontStyle: 'italic', cursor: 'pointer' }}> 🎬 MOVIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home" active style={{ paddingLeft: '280%' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">Favourites ({favorites.length})</Nav.Link>
            <NavDropdown title="Dropdown link" id="navbarDropdownMenuLink">
              <NavDropdown.Item as={Link} to="#">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline onSubmit={handleSearch}>
            <FormControl
              style={{ marginTop: '10%' }}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button style={{ backgroundColor: 'orange', marginTop: '-29%', marginLeft: '110%' }}>
              <FontAwesomeIcon icon={faSearch} style={{ color: 'gray', borderColor: 'orange' }}></FontAwesomeIcon>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
