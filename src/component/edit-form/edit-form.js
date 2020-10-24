import React, { Component } from 'react';

export default class EditForm extends Component {

    render() {
        const className = this.props.show ? 'd-flex' : 'd-none';
        return <form className={className}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Save</button>
        </form>
    }
}