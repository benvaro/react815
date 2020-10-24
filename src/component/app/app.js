import React from 'react';
import Header from '../header';
import SearchPanel from '../search-panel';
import CardList from '../card-list';
import './app.css';

import AddForm from '../add-form';
import { Component } from 'react';

export default class App extends Component {
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

    onAdd = (item) => {
        console.log(item);
        // add logic
    }

    render() {
        return <div className="container">
            <Header text="Films" color="olive" />
            <SearchPanel />
            <CardList obj={this.state.obj} />

            <AddForm onAdd={this.onAdd} />
        </div>
    }
}