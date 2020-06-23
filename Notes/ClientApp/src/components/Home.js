import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';
import AddNoteModal from './form/AddNoteModal';

export class Home extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        fetch('api/notes/all')
            .then(res => res.json())
            .then(res => this.setState({ items: res }))
            .catch(err => console.log(err));
    }

    addNoteToState = note => {
        this.setState(previous => ({
            items: [...previous.items, note]
        }));
    }

    updateState = (id) => {
        this.getItems();
    }

    deleteItemFromState = id => {
        const updated = this.state.items.filter(item => item.id !== id);
        this.setState({ items: updated })
    }

    render() {
        return <Container style={{ paddingTop: "100px" }}>
            <Row>
                <Col>
                    <h3>List Notes</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable
                        items={this.state.items}
                        updateState={this.updateState}
                        deleteItemFromState={this.deleteItemFromState} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddNoteModal isNew={true} addNoteToState={this.addNoteToState} />
                </Col>
            </Row>
        </Container>;
    }
}