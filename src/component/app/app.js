import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../header';
import SearchPanel from '../search-panel';
import CardList from '../card-list';
import './app.css';
import Table from '../table';
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
        ],
        search: ''
    }

    onAdd = (item) => {
        const { obj } = this.state;
        item.id = obj.length > 0 ? obj[obj.length - 1].id + 1 : 1;
        this.setState({ obj: [...this.state.obj, item] });
    }

    onDelete = (id) => {
        const { obj } = this.state;
        let index = obj.findIndex(x => x.id == id);
        this.setState({
            obj: [...obj.slice(0, index),
            ...obj.slice(index + 1)]
        });
    }

    onSearch = (search) => {
        this.setState({ search })
    }

    render() {
        const { obj } = this.state;
        const filtered = obj.filter(x => x.name.toLowerCase().includes(this.state.search.toLowerCase()));

        return <div className="container-fluid p-0">
            <Router>
                <Header text="Films" color="olive" />
                <SearchPanel onSearch={this.onSearch} />
                <Switch>
                    <Route path='/' exact render={() => <Table obj={filtered} />} />
                    <Route path='/all' exact render={() => <CardList obj={filtered} onDelete={this.onDelete} />} />
                    <Route path='/all/:id' render={({ match }) => <CardList id={match.params.id} obj={filtered} onDelete={this.onDelete} />} />
                    {/* <CardList   /> */}
                    <Route path='/add' render={() => <AddForm onAdd={this.onAdd} />} />
                    {/* <AddForm onAdd={this.onAdd} /> */}

                    <Route render={() => <h1>Nothing found....</h1>} />
                    {/* <Redirect to='/' /> */}
                </Switch>
            </Router>
        </div>
    }
}