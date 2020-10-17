import React, { Component } from 'react';
import Card from '../card';
import './card-list.css'



export default class CardList extends Component {
    state = {
        obj: [{
            id: 1,
            name: "me before you",
            year: 2015,
            genre: "drama"
        },
        {
            id: 2,
            name: "1+1",
            year: 2020,
            genre: "psychology"
        },
        {
            id: 3,
            name: "dark knight",
            year: 2019,
            genre: "fantasy"
        },
        {
            id: 4,
            name: "dark",
            year: 2019,
            genre: "fantasy"
        }
        ]
    }

    deleteFilm = (id) => {
        console.log(id);
        // todo: delete element from array by id
        // пам'ятаємо: НЕ МОЖНА змінювати state "напряму" - лише через setState
    }

    render() {
        return <div className="row">
            {this.state.obj.map((elem) => { return <Card onDelete={this.deleteFilm} key={elem.name} film={elem} /> })}
        </div>
    }
}