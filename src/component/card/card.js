import React, { Component } from 'react';

import './card.css'

export default class Card extends Component {
    state = {
        important: false,
        deleted: false
    }


    showName = () => {
        this.setState({ important: !this.state.important });
        // this.state.important = !this.state.important;
        console.log("click: " + this.state.important);
    }

    disableItem = () => {
        this.setState({ deleted: !this.state.deleted })
    }

    render() {
        const { onDelete } = this.props;
        const { film } = this.props;
        const { id, name, year, genre } = film;
        const { important, deleted } = this.state;
        let className = "col-12 col-md-6 col-lg-4 card";
        if (important)
            className += ' important';
        if (deleted)
            className += ' disabled';
        const src = "https://robohash.org/" + name + ".png";
        return <div className={className} onClick={this.showName}>
            <div className="d-flex justify-content-between">
                <h2>{name}​​</h2>
                <a>
                    <i className="fas fa-window-close" onClick={() => onDelete(id)}></i>
                </a>
            </div>

            <img src={src} />
            <div>
                <p><b>Year: </b>{year}​​</p>
                <p><b>Genre: </b>{genre}​​</p>
            </div>
        </div>
    }
}