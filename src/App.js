import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Axios from "axios";
import { Button, Modal } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      show: false,
      negara: [],
    };
  }
  componentDidMount() {
    Axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      this.setState(
        {
          negara: res.data,
        },
        () => console.log(this.state.negara)
      );
    });
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <>
        <div class="container">
          <div class="center">
            <div class="row utama">
              <div class="col-md-6 kiri">
                <h4 class="text-primary font-weight-bold">
                  General Information
                </h4>
                <div class="col s12">
                  <div class="col s12">
                    <div class="form-group">
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option selected>Title</option>
                        <option>Businessman</option>
                        <option>Secretary</option>
                        <option>Reporter</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-field col s6">
                    <input
                      id="first_name"
                      type="text"
                      class="validate form-black"
                    />
                    <label for="first_name">First Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input
                      id="last_name"
                      type="text"
                      class="validate form-black"
                    />
                    <label for="last_name">Last Name</label>
                  </div>
                  <div class="col s12">
                    <div class="form-group">
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option selected>Position</option>
                        <option>Director</option>
                        <option>Manager</option>
                        <option>Employee</option>
                      </select>
                    </div>
                  </div>
                  <div class="input-field col s12">
                    <input
                      id="company"
                      type="text"
                      class="validate form-black"
                    />
                    <label for="company">Company</label>
                  </div>
                </div>
              </div>
              <div class="col-md-6 kanan">
                <h4 class="text-light font-weight-bold">Contact Details</h4>
                <div class="col s12">
                  <div class="input-field col s12 text-light">
                    <input
                      id="address"
                      type="text"
                      class="validate form-white"
                    />
                    <label for="address" class="text-light">
                      Address
                    </label>
                  </div>
                  <div class="input-field col s6">
                    <input
                      id="zip_code"
                      type="text"
                      class="validate form-white"
                    />
                    <label for="zip_code" class="text-light">
                      Zip Code
                    </label>
                  </div>
                  <div class="input-field col s6">
                    <input id="place" type="text" class="validate form-white" />
                    <label for="place" class="text-light">
                      Place
                    </label>
                  </div>
                  <div class="col s12">
                    <div class="form-group">
                      <select
                        class="form-control form-white text-light"
                        id="country"
                      >
                        <option selected class="text-dark">
                          Country
                        </option>
                        {this.state.negara.map((post) => {
                          return <option class="text-dark">{post.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div class="input-field col s6">
                    <input id="code" type="text" class="validate form-white" />
                    <label for="code" class="text-light">
                      Code +{" "}
                    </label>
                  </div>
                  <div class="input-field col s6">
                    <input id="phone" type="text" class="validate form-white" />
                    <label for="phone" class="text-light">
                      Phone Number
                    </label>
                  </div>
                  <div class="input-field col s12 text-light">
                    <input
                      id="email"
                      type="email"
                      class="validate form-white"
                    />
                    <label for="email" class="text-light">
                      Your Email
                    </label>
                  </div>
                  <div class="col s2">
                    <Button variant="primary" className="mb-4" onClick={this.handleShow}>
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Title</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
