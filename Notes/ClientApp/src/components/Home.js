import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import DataTable from './DataTable';
import AddNoteModal from './form/AddNoteModal';
import { withTranslation } from "react-i18next";

class Home extends Component {

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
        const { t, i18n } = this.props;

        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
        return <Container style={{ paddingTop: "100px" }}>
            <div>
                <Button color="success" onClick={() => changeLanguage("ru")}>ru</Button>
                <Button color="success" onClick={() => changeLanguage("en")}>en</Button>
            </div>
            <Row>
                <Col>
                    <h3>{t("List Notes")}</h3>
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

export default withTranslation()(Home);