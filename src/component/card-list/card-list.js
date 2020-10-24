import React, { Component } from 'react';
import Card from '../card';
import './card-list.css'



export default class CardList extends Component {

    deleteFilm = (id) => {
        console.log(id);
        // todo: delete element from array by id
        // пам'ятаємо: НЕ МОЖНА змінювати state "напряму" - лише через setState
    }

    render() {
        return <div className="row">
            {this.props.obj.map((elem) => { return <Card onDelete={this.deleteFilm} key={elem.name} film={elem} /> })}
        </div>
    }
}