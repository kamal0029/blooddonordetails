import React from "react";
import './table.css';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
class Blooddetails extends React.Component {
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
                        Blood donation not only makes the receiver’s life  
                        <Alert.Link href="#"> good </Alert.Link>but also helps the donor to maintain good health.
                        
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
                <Search val={this.props.getData} />
            </>
        )
    }
}
function Search(props) {
    console.log(props.val);
    const [query, setaquery] = React.useState()
    const [changes, setchange] = React.useState(false)
    const change = (e) => {
        setaquery(e.target.value)
        setchange(true)
    }
    const datas = props.val.filter(dat => dat.City.toLowerCase().includes(query))
    return (
        <>
        <br></br>

            <Alert variant="success">
                <Alert.Heading>Search Blood groups available in different cities.</Alert.Heading>
                <Container>
<Row>
    <Col>
    <Form.Select onChange={change}>
                <option value={"hosur"}>Hosur</option>
                <option value={"chennai"}>Chennai</option>
                <option value={"ooty"}>ooty</option>
                <option value={"perundurai"}>Perundurai</option>
                <option value={"erode"}>Erode</option>
                <option value={"bhavani"}>Bhavani</option>
                </Form.Select>
    </Col>
    <Col>
    </Col>
</Row>
                </Container>
                
                <hr />
                <p className="mb-0">
                Blood donation helps in lowering the risk of cancer. By donating blood the iron stores in the body are maintained at healthy levels.
                   
                </p>
            </Alert>

            <div>
                {changes ?
                    <div>
                        <table id="customers">
                            <tr>
                                <td>Name</td>
                                <td>City</td>
                                <td>Mobile</td>
                                <td>BloodGroup</td>
                            </tr>
                            {datas.map(pin => (

                                <tr>
                                    <td>{pin.Name}</td>
                                    <td>{pin.City}</td>
                                    <td>{pin.Mobile}</td>
                                    <td>{pin.BloodGroup}</td>
                                </tr>

                            ))}
                        </ table>
                    </div> :
                    <div>
                        <table id="customers">
                            <tr>
                                <td>Name</td>
                                <td>City</td>
                                <td>Mobile</td>
                                <td>BloodGroup</td>
                            </tr>
                            {props.val.map(pinu => (
                                <>

                                    <tr>
                                        <td>{pinu.Name}</td>
                                        <td>{pinu.City}</td>
                                        <td>{pinu.Mobile}</td>
                                        <td>{pinu.BloodGroup}</td>
                                    </tr>
                                </>
                            ))}
                        </ table>
                    </div>
                }
            </div>

        </>
    )
}
export default Blooddetails;