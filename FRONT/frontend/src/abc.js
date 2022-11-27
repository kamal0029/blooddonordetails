import React from "react";
import './table.css';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class Table1 extends React.Component {
  render() {
    return (

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Blood Bank</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to='/form'>Become A Donor</Link></Nav.Link>
              <Nav.Link href="#features"><Link to='/details'> Blood Details</Link></Nav.Link>

              <Nav.Link href="#pricing"><Link to='/table'>City Details</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br></br>
        {[
          'primary'
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
           Give To People From What God Has Provided You.It Will Surely  
            <Alert.Link href="#"> Come Back </Alert.Link>To You With Greater Value.. 
          </Alert>
        ))}
        <table id="customers">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">City</th>
              <th scope="col">Mobile</th>
              <th scope="col">BloodGroup</th>
              <th scope="col">Delete</th>

            </tr>
          </thead>
          <tbody>
            {
              this.props.getData.length > 0 ?
                (
                  this.props.getData.map(e =>

                    <tr key={e._id}>
                      <td>{e.Name}</td>
                      <td>{e.City}</td>
                      <td>{e.Mobile}</td>
                      <td>{e.BloodGroup}</td>


                      <td>
                        <button className="btn btn-primary" onClick={event => {
                          this.props.del(e)
                        }}>Delete</button>
                      </td>

                    </tr>
                  )

                )
                :
                (
                  <tr>
                    <td></td>
                    <td>No data</td>
                  </tr>)
            }
          </tbody>
        </table>
        
        <br></br>
      </>
    )
  }
}

export default Table1;