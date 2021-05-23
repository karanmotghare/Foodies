import React from 'react';
import { Navbar,Button,Form,FormControl } from 'react-bootstrap';



export default function ProminentAppBar() {
   
    return(
        <Navbar collapseOnSelect expand="" bg="dark" variant="dark">
            {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Bloggers">Bloggers</Nav.Link>
                    <Nav.Link href="#Restaurant">Restaurant</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
    </Navbar.Collapse>*/}
            <Navbar>
            <img src={require("./logo.jpg")} alt="" height="30px" width="30px" />
            <Navbar.Brand>Foodies</Navbar.Brand>
            </Navbar>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            <Button onClick="">SignIn</Button>
        </Navbar>
        );
}