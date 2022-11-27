import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

class Form1 extends React.Component {
    constructor() {
        super();
        this.state = {
            _id: "",
            Name: "",
            City: "",
            Mobile: "",
            BloodGroup: "",

            isEdit: false
        }

    }
    infoChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    infoSubmit = event => {
        if (!this.state.isEdit) {
            event.preventDefault();
            let data = {
                isEdit: this.state.isEdit,
                Name: this.state.Name,
                City: this.state.City,
                Mobile: this.state.Mobile,
                BloodGroup: this.state.BloodGroup
            }
            this.props.myData(data);
        }
        else {
            let data = {
                isEdit: this.state.isEdit,
                _id: this.state._id,
                Name: this.state.Name,
                City: this.state.City,
                Mobile: this.state.Mobile,
                BloodGroup: this.state.BloodGroup
            }
            this.props.myData(data);
        }

    }
    componentWillReceiveProps(props) {
        if (props.setForm._id != null) {
            this.setState({
                isEdit: true,
                _id:props.setForm._id,
                Name:props.setForm.Name,
                City:props.setForm.City,
                Mobile:props.state.Mobile,
                BloodGroup: props.state.BloodGroup
            })
        }
    }
    render() {
        return (

            <><Navbar bg="dark" variant="dark">
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
                <br /><Alert variant="success">
                    <Alert.Heading>Blood Donor Form</Alert.Heading>
                    <p>
                        Giving blood is a way to engage in the immediate community and help people around you
                    </p>
                    <hr />
                    <p className="mb-0">
                        “For one blood donation, it takes your body about 500 calories to replace it,” 
                    </p>
                </Alert><Container>
                    <Row>
                        <Col>
                            <Form onSubmit={this.infoSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" onChange={this.infoChange}
                                        name="Name"
                                        autocomplete="off"
                                        value={this.state.Name} />
                                 
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" onChange={this.infoChange}
                                        name="City"
                                        value={this.state.City} />
                                    <Form.Text className="text-muted">
                                        We'll never share your City with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Mobile" onChange={this.infoChange}
                                        name="Mobile"
                                        value={this.state.Mobile} />
                                    <Form.Text className="text-muted">
                                        We'll never share your Mobile with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>BloodGroup</Form.Label>
                                    <Form.Control type="text" placeholder="BloodGroup"
                                        onChange={this.infoChange}
                                        name="BloodGroup"
                                        value={this.state.BloodGroup} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I Agree To Share My Details." />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={()=>{window.alert('submitted.')}}>
                                    {this.state.isEdit ? 'Update' : 'Donate'}
                                </Button>
                            </Form>
                        </Col>
                        <Col>
                            {[

                                'Success',
                                'Danger',

                            ].map((variant) => (
                                <Card
                                    bg={variant.toLowerCase()}
                                    key={variant}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '18rem' }}
                                    className="mb-2"
                                >
                                    <Card.Header>KEC BLOOD BANK</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Blood Donation Benefits </Card.Title>
                                        <Card.Text>
                                            If your hemoglobin is too high, blood donation helps to lower the viscosity of the blood, which has been associated with the formation of blood clots, heart attacks, and stroke
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container></>
        )
    }
}


export default Form1;