import React from 'react'
import {Container} from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

function Layout(props) {
  return (
    <div>
        <Navbar expand='lg' variant='dark' bg='success'>
            <Container>
                <Navbar.Brand> CRUD </Navbar.Brand>
                </Container>
            <Container>{props.children}</Container> 

        </Navbar>
        
    </div>
  )
}

export default Layout