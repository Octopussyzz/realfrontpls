import React from 'react';
import Axios from "axios";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Row} from "reactstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class FormAudience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            public: false
        }
    }

    getToken = () => {
        let token = localStorage.getItem('access_token');
        return token;
    };

    postAudiences = async (jwt) => {
         await Axios({
            method: 'post',
            url: 'http://localhost:8080/audience',
            headers: {
                'Authorization' : 'Bearer ' + jwt,
            },
            data: {
                name: this.state.name,
                description: this.state.description,
                public: this.state.public,
                updated_at: this.state.updated_at
            }

        });
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleDescriptionChange = (description) => {
        this.setState({
            description: description
        })
    }

    handleSubmit= event => {
        event.preventDefault();
       let jwt = this.getToken();
        this.postAudiences(jwt);
        window.location = "/admin/audiences"
    };

    handleCheckbox = () => {
        this.setState({
            public: !this.state.public
        })
    }
    render() {
        return (
            <>
                <div className="content">
                    <Row className="justify-content-center">
                        <Col md="10">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5">Create Audience </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit} action="/admin/audiences">
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <label>Audience Name</label>
                                                    <Input
                                                        type="text"
                                                        id="name"
                                                        value={this.state.name}
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Description
                                                    </label>
                                                    <CKEditor id="description" name="description"
                                                              editor={ ClassicEditor }
                                                              data={this.state.description}
                                                              onChange={ ( event, editor ) => {
                                                                  const data = editor.getData();
                                                                  this.handleDescriptionChange(data);
                                                              }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">Public Audience ?</label>
                                                    <Input
                                                        checked={this.state.public}
                                                        type="checkbox"
                                                        id="public"
                                                        onChange={this.handleCheckbox}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Col md="5">
                                                <Button className="btn btn-round btn-danger" type="submit">Create Audience </Button>
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

export default FormAudience;
