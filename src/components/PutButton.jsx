import React from 'react';
import Axios from "axios";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class PutButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log(this.props);
        let id = this.props.id;
        window.location = "/admin/audience/" + id;
    };

    render() {
        return (
            <>
                {/*<UncontrolledTooltip placement="right" target={this.props.id}>
                    Delete Audience
                </UncontrolledTooltip>*/}
                <Button
                    className="btn-round btn-icon"
                    color="warning"
                    outline
                    size="sm"
                    id={this.props.id}
                    onClick={this.handleClick}
                >
                    <i className="fa fa-cog" />
                </Button>
            </>
        )
    }
}

export default PutButton;