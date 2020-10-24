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
        this.setState({ name: '', genre: '', year: '' });
    }

    render() {
        return <>
            <form className="mt-4 mb-4">
                <input onChange={(e) => this.onNameChange(e)} type="text" value={this.state.name} name="name" className="form-control" />
                <input onChange={(e) => this.onGenreChange(e)} type="text" value={this.state.genre} name="genre" className="form-control" />
                <input onChange={(e) => this.onYearChange(e)} type="text" value={this.state.year} name="year" className="form-control" />
            </form>
            <button className="btn btn-info" onClick={() => { this.onAdd() }}>Add</button>
        </>
    }
}