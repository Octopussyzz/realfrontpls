/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import "../assets/scss/paper-dashboard.scss";
import Axios from "axios";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: "",
      mailAddress: "",
      society: "",
      postalAddress: ""

    };
  }

  getUserInformation = async (jwt) => {

    let response = await Axios.get('http://localhost:8080/details',{
      headers: {
        'Authorization' : 'Bearer ' + jwt,
      }

    });
    this.setState({
      mailAddress : response.data.mailAddress,
      society : response.data.society,
      postalAddress : response.data.postalAddress
    });
  };

  getToken = () => {
    const TOKEN = localStorage.getItem('access_token');
    return TOKEN;
  };

  putNewUserInformations = async (jwt) => {

    await Axios({
      method: 'put',
      url: 'http://localhost:8080/details',
      headers: {
        'Authorization': 'Bearer ' + jwt,
      },
      data: {
        mailAddress: this.state.mailAddress,
        society: this.state.society,
        postalAddress: this.state.postalAddress
      }
    });
  }

  componentDidMount() {
    let jwt = this.getToken();
    this.getUserInformation(jwt);
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    let jwt = this.getToken();
    this.putNewUserInformations(jwt);
  };

  render() {
    return (
      <>
        <div className="content">
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Edit Details</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Company</label>
                          <Input
                            placeholder="Your Company Name"
                            type="text"
                            id="society"
                            value={this.state.society}
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email"
                                 type="email"
                                 id="mailAddress"
                                 value={this.state.mailAddress}
                                 onChange={this.handleChange}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Complete Address</label>
                          <Input
                            placeholder="Company Address"
                            type="textarea"
                            value={this.state.postalAddress}
                            id="postalAddress"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col md="5">
                        <Button className="btn btn-round btn-danger" type="submit">Submit Changes</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
