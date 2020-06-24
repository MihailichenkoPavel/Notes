import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddNoteForm from './AddNoteForm';
import { withTranslation } from "react-i18next";
import i18next from 'i18next';

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
        const { t, i18n } = this.props;
        const isNew = this.props.isNew;

        let title = i18next.t('Edit Note');
        let button = '';
        if (isNew) {
            title = i18next.t('Add Note');

            button = <Button
                color="success"
                onClick={this.toggle}
                style={{ minWidth: "200px" }}>{t("Add")}</Button>;
        } else {
            button = <Button
                color="warning"
                onClick={this.toggle}>{t("Edit")}</Button>;
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

export default withTranslation()(AddNoteModal);