import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddNoteForm from './AddNoteForm';

class AddNoteModal extends Component {

    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }

    render() {
        const isNew = this.props.isNew;

        let title = 'Edit Note';
        let button = '';
        if (isNew) {
            title = 'Add Note';

            button = <Button
                color="success"
                onClick={this.toggle}
                style={{ minWidth: "200px" }}>Add</Button>;
        } else {
            button = <Button
                color="warning"
                onClick={this.toggle}>Edit</Button>;
        }

        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                <ModalBody>
                    <AddNoteForm
                        addNoteToState={this.props.addNoteToState}
                        updateNoteIntoState={this.props.updateNoteIntoState}
                        toggle={this.toggle}
                        note={this.props.note} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}

export default AddNoteModal;