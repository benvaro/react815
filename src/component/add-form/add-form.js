import React, { Component } from 'react';

import './add-form.css';

export default class AddForm extends Component {
    state = {
        name: '',
        genre: '',
        year: ''
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    onGenreChange = (e) => {
        this.setState({ genre: e.target.value });
    }

    onYearChange = (e) => {
        this.setState({ year: e.target.value });
    }

    onAdd = () => {
        this.props.onAdd(this.state);
    }

    render() {
        return <>
            <form>
                <input onChange={(e) => this.onNameChange(e)} type="text" name="name" className="form-control" />
                <input onChange={(e) => this.onGenreChange(e)} type="text" name="genre" className="form-control" />
                <input onChange={(e) => this.onYearChange(e)} type="text" name="year" className="form-control" />
            </form>
            <button className="btn btn-info" onClick={() => { this.onAdd() }}>Add</button>
        </>
    }
}