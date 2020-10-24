import React from 'react';
import { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        search: ''
    }
    onSearchChange = (e) => {
        this.setState({ search: e.target.value });
        this.props.onSearch(e.target.value);
    }
    render() {
        return <div className="container">
            <input value={this.state.search} onChange={(e) => this.onSearchChange(e)} className='form-control mb-4' type='search' />
        </div>
    }
}
