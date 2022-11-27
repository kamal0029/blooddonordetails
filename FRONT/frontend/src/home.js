import React from 'react';
import './Home.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
class Home extends React.Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "KEC BLOOD DONOR MANAGEMENT",
                "src": [
                    "https://vijayahospital.org/wp-content/uploads/2022/04/blood-bank-1024x683.png",
                    "https://image.shutterstock.com/image-vector/blood-types-compatibility-table-group-260nw-2054956904.jpg",
                    "https://img.freepik.com/free-psd/donate-blood-campaign-banner-design_23-2148690138.jpg?w=2000",
                    "https://d2vlcm61l7u1fs.cloudfront.net/media%2F007%2F007b5ea2-43b7-48d5-a305-7fb4974440b2%2FphpDldslN.png"
                ],
                "description": "BLOOD DANATION MANAGEMENT",
                "content": "This website is created for managing the details of different blood groups donated in Kongu Engineering College.This Website is created using ReactJs for front end and MongoDB is used for Storing and fetching the data(Blood group details)",
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount() {
        const { index } = this.state;
        this.myRef.current.children[index].className = "active";
    }


    render() {
        const { products, index } = this.state;
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
            </Navbar><>
                    <div className="Home">
                        {products.map(item => (
                            <div className="details" key={item._id}>
                                <div className="big-img">
                                    <img src={item.src[index]} alt="" />
                                </div>

                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>

                                    </div>
                                    <Colors colors={item.colors} />

                                    <p>{item.description}</p>
                                    <p>{item.content}</p>

                                    <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                                    <button className="cart"><Link to='/form'>Donate Blood!</Link></button>

                                </div>
                            </div>
                        ))}
                        {<div>
                            <Container>
                                <Row>
                                    <Col xs={5}><table id='customers'>
                                        <tr>
                                            <th>Blood Group</th>
                                            <th>Can Donate To</th>
                                        </tr>
                                        <tr>
                                            <td>O+</td>
                                            <td>O+,A+,AB+</td>
                                        </tr>
                                        <tr>
                                            <td>A+</td>
                                            <td>A+,AB+</td>
                                        </tr>
                                        <tr>
                                            <td>O-</td>
                                            <td>All Blood Types</td>
                                        </tr>
                                        <tr>
                                            <td>AB-</td>
                                            <td>AB-,AB+</td>
                                        </tr>
                                    </table></Col>
                                    <Col>
                                        <Row xs={10} md={10} className="g-4">
                                            {Array.from({ length: 2 }).map((_, idx) => (
                                                <Col>
                                                    <Card>
                                                        <Card.Img variant="top" src="./cardimg.jpg" />
                                                        <Card.Body>
                                                            <Card.Title>Blood Donation</Card.Title>
                                                            <Card.Text>
                                                                Regular blood donation is linked to lower blood pressure and a lower risk for heart attacks. “It definitely helps to reduce cardiovascular risk factors,”
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row></Col>
                                </Row>
                            </Container>

                        </div>}


                    </div>

                </></>

        );

    };

}

export default Home;
