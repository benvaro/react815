import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EditForm from '../edit-form/edit-form';
import './card.css'

class Card extends Component {
    state = {
        important: false,
        deleted: false,
        isOpenEdit: false
    }


    showName = (id, history) => {
        console.log(id);
        this.setState({ important: !this.state.important });
        // this.state.important = !this.state.important;
        console.log("click: " + this.state.important);
        // /all/{elem.id} 
        history.push(`/all/${id}`);
    }

    disableItem = () => {
        this.setState({ deleted: !this.state.deleted })
    }

    onEdit = (id) => {
        this.setState({ isOpenEdit: !this.state.isOpenEdit })
    }

    render() {
        console.log(this.props);
        const { onDelete } = this.props;
        const { film } = this.props;
        const { id, name, year, genre } = film;
        const { important, deleted } = this.state;
        let className = "col-12 col-md-6 col-lg-4 card";
        if (important)
            className += ' important';
        if (deleted)
            className += ' disabled';
        const src = "https://robohash.org/" + name + ".png?set=set4";
        return <div className={className} onClick={() => this.showName(id, this.props.history)}>
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
            <button className="btn btn-info" onClick={() => this.onEdit(id)}>Edit</button>

            <EditForm show={this.state.isOpenEdit} />

        </div>
    }
}

export default withRouter(Card)