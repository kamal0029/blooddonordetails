import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import Form1 from './form';
import Table1 from './table';
import Blooddetails from './blooddetails';
import Home from './home';
import Login from './components/Login';
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

import Signup from "./components/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { UserAuthContextProvider } from "./context/UserAuthContext";

class App extends React.Component {
  constructor() {
    super();
    this.state =
    {
      data: [],
      editData: []
    }
  }
  create = data => {
    if (!data.isEdit) {
      axios.post("http://localhost:5000/info", data).then(res => {
        this.getAll();
      })
    }
    else {

      axios.put("http://localhost:5000/info/update", data).then(
        res => {
          console.log(res);
          this.getAll();
        }

      )
    }

  }
  componentDidMount() {
    this.getAll();
  }
  getAll() {
    axios.get("http://localhost:5000/info").then(
      res => {
        console.log(res.data);
        this.setState
          (
            {
              data: res.data
            }
          )
      }
    )
  }
  update = data => {
    console.log(data);
    this.setState({
      editData: data
    })
  }
  del = data => {
    var option = window.confirm(`Do you want to DELETE ${data.Name}`)
    if (option) {
      axios.delete(`http://localhost:5000/info/del/${data._id}`).then(res => {
        console.log(res);
        this.getAll();

      })
    }
  }
  render() {
    return (
      
      <Router>
        <Routes>
          <Route exact path='/form' element={<Form1 myData={this.create} setForm={this.state.editData} />}></Route>
          <Route exact path='/details' element={<Table1 getData={this.state.data} setData={this.update} del={this.del} />}></Route>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/table' element={<Blooddetails getData={this.state.data} setData={this.update} del={this.del}/>}></Route>
          <Route exact path='/abc' element={[<Form1 myData={this.create} setForm={this.state.editData}/>,<Table1 getData={this.state.data} setData={this.update} del={this.del}/>] }></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>

    )
  }
}

export default App;
