import React from 'react';
import Axios from "axios";
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input, Row} from "reactstrap";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CreateMail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            content: "",
            status: false,
            audienceTitle: "",
            audienceDescription: "",
            public: false
        }
    }

    getToken = () => {
        let token = localStorage.getItem('access_token');
        return token;
    };

    getOneAudience = async (jwt, id ) => {
        let response = await Axios.get('http://localhost:8080/audience/' + id,{
            headers: {
                'Authorization': 'Bearer ' + jwt,
            }
        });
        this.setState({
                audienceTitle: response.data.name,
                audienceDescription: response.data.description,
                public: response.data.public
            }

        )
    };
    postMail = async (jwt, id ) => {
        await Axios({
            method: 'post',
            url: 'http://localhost:8080/' + id + '/mail',
            headers: {
                'Authorization' : 'Bearer ' + jwt,
            },
            data: {
                subject: this.state.subject,
                content: this.state.content,
                status: this.state.status
            }

        });
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleDescriptionChange = (content) => {
        this.setState({
            content: content
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let jwt = this.getToken();
        let id = this.props.match.params.id;
        this.setState({
            status: true
        });
        this.postMail(jwt, id);
        window.location = "/admin/audiences"
    };

    handleDraft = () => {
        this.setState({
            status: false
        })
    }

    handleSend = () => {
        this.setState({
            status: true
        })
    }

    componentDidMount() {
        let jwt = localStorage.getItem('access_token');
        let id = this.props.match.params.id;
        this.getOneAudience(jwt, id);
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row className="justify-content-center">
                        <Col md="10">
                            <Card className="card-user">
                                <CardBody style={{minHeight: 0}}>
                                    <h5 className="text-center">{this.state.audienceTitle}</h5>
                                    <div className="text-justify" dangerouslySetInnerHTML={{__html: this.state.audienceDescription}}/>
                                </CardBody>
                            </Card>
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle tag="h5" className="text-center">Create an Email </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <label><b>Object</b> </label>
                                                    <Input
                                                        type="text"
                                                        id="subject"
                                                        value={this.state.subject}
                                                        onChange={this.handleChange}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-1" md="12">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        <b>Content</b>
                                                    </label>
                                                    <CKEditor id="content" name="description"
                                                              editor={ClassicEditor}
                                                              data={this.state.content}
                                                              onChange={(event, editor) => {
                                                                  const data = editor.getData();
                                                                  this.handleDescriptionChange(data);
                                                              }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center">
                                            <Col md="3">
                                                <Button className="btn btn-round btn-warning" onClick={this.handleDraft}
                                                        type="submit">Draft Mail </Button>
                                            </Col>
                                            <Col md="3">
                                                <Button className="btn btn-round btn-success" onClick={this.handleSend}
                                                        type="submit">Send Mail </Button>
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

export default CreateMail;
