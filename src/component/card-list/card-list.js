import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../card';
import './card-list.css'



const CardList = ({ id, obj, onDelete, onEdit, ...props }) => {
    console.log(props);
    const elem = id <= obj.length ? obj[id - 1] : obj[0];
    let el = '';
    if (id == undefined)
        el = obj.map((elem) => { return <Card onDelete={onDelete} key={elem.name} film={elem} /> });
    else
        el = <Card onDelete={onDelete} key={elem.id} film={elem} edit={onEdit} />;
    return <div className="container">
        <div className="row">
            {el}
        </div>
    </div>
}

export default withRouter(CardList);