import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

class CreateMailButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log(this.props);
        let id = this.props.id;
        window.location = "/admin/audience/" + id + "/mail";
    };

    render() {
        return (
            <>
                {/*<UncontrolledTooltip placement="right" target={this.props.id}>
                    Delete Audience
                </UncontrolledTooltip>*/}
                <Button
                    className="btn-round btn-icon"
                    color="success"
                    outline
                    size="sm"
                    id={this.props.id}
                    onClick={this.handleClick}
                >
                    <i className="fa fa-envelope" />
                </Button>
            </>
        )
    }
}

export default CreateMailButton;