import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class AddNoteForm extends React.Component {

    state = {
        id: 0,
        name: '',
        text: ''
    }

    componentDidMount() {
        if (this.props.note) {
            const { id, name, text } = this.props.note
            this.setState({ id, name, text });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitNew = e => {
        e.preventDefault();
        fetch('api/notes/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                text: this.state.text
            })
        })
            .then(res => res.json())
            .then(note => {
                this.props.addNoteToState(note);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }

    submitEdit = e => {
        e.preventDefault();
        fetch('api/notes/update/', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                text: this.state.text
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateNoteIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }

    render() {
        return <Form onSubmit={this.props.note ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
            </FormGroup>
            <FormGroup>
                <Label for="text">Text:</Label>
                <Input type="text" name="text" onChange={this.onChange} value={this.state.text === null ? '' : this.state.text} />
            </FormGroup>
            <Button>Send</Button>
        </Form>;
    }
}

export default AddNoteForm;