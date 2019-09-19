import React from 'react';
import {Button, Col, Row, UncontrolledTooltip, Form} from "reactstrap";
import Axios from "axios";
import DeleteButton from "./DeleteButton";
import PutButton from "./PutButton";
import CreateMailButton from "./CreateMailButton";

class DisplayAudience extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li key={this.props.audience.id}>
            <Row>
                <Col className="col-ms-9" xs="9">
                    {this.props.audience.name} <br />
                    <span className="text-muted">
                                <small>Updated at {this.props.audience.updatedAt}</small>
                              </span>
                </Col>
                <Col className="justify-content-around" md="3" xs="3">
                    <Row className="justify-content-around">

                       <DeleteButton id={this.props.audience.id}/>
                       <PutButton id={this.props.audience.id} />
                       <CreateMailButton id={this.props.audience.id}/>
                    </Row>
                </Col>
            </Row>
        </li>)

        };
    }

export default DisplayAudience;