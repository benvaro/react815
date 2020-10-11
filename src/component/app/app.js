import React from 'react';
import Header from '../header';
import SearchPanel from '../search-panel';
import CardList from '../card-list';
import './app.css'

const App = () => {
    return <div className="container">
        <Header />
        <SearchPanel />
        <CardList />
    </div>
}

export default App;