import React from 'react';
import {Button, Col, Row, UncontrolledTooltip} from "reactstrap";
import Axios from "axios";
import DisplayAudience from "./DisplayAudience";

class Audience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            audiences: []
        }
    }

    getToken = () => {
        let token = localStorage.getItem('access_token');
        return token;
    };

    getAudiences = async (jwt) => {
        let response = await Axios.get('http://localhost:8080/audiences',{
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        });
        this.setState({
                audiences: response.data
            }

        )
    };

    componentDidMount() {
        let jwt = this.getToken();
        this.getAudiences(jwt);
    }

    render() {
        return (
            <>
                {this.state.audiences.map(audience =>
                <DisplayAudience audience={audience} key={audience.id}/>
                )}
            </>
        )
    }
}

export default Audience;