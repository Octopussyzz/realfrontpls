import React from 'react';
import {Button, Row, UncontrolledTooltip, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Axios from "axios";

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    deleteAudience = (id) => {
        let jwt = localStorage.getItem('access_token');
        Axios.delete('http://localhost:8080/audience/' + id, {
            headers: {
                'Authorization' : 'Bearer ' + jwt,
            }
        })
    };

    handleDelete = () => {
        let id = this.props.id;
        console.log(this.props.id);
        this.deleteAudience(id);
        window.location.reload();
    };

    render() {
        return (
            <>
                {/*<UncontrolledTooltip placement="right" target={this.props.id}>
                    Delete Audience
                </UncontrolledTooltip>*/}
                <Button
                    className="btn-round btn-icon"
                    color="danger"
                    outline
                    size="sm"
                    id={this.props.id}
                    onClick={this.toggle}
                >
                    <i className="fa fa-times" />
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Are you sure ?</ModalHeader>
                    <ModalBody>
                        Do you really want to delete this audience ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cancel</Button>{' '}
                        <Button color="danger" onClick={this.handleDelete}>Delete</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}
export default DeleteButton;