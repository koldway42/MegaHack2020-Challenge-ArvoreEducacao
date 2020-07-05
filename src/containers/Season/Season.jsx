import React, { useState, useEffect } from 'react';

import Container from "../Container/Container"
import Livro from "../../components/Livro/Livro"

import Loading from "../../components/Loading/Loading"
import "./Season.scss"

export default () => {
    const [ books, setBooks ] = useState([]);
    const [ events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://5effee7bdfd1400016ae1603.mockapi.io/api/v1/Livros")
            .then(resp => resp.json())
            .then(data => setBooks(data))
    })

    useEffect(() => {
        fetch("https://5effee7bdfd1400016ae1603.mockapi.io/api/v1/evento")
            .then(resp => resp.json())
            .then(data => setEvents(data))
    })

    let eventBook;
    let actualEvent;

    if(books.length && events.length) {
        actualEvent = events[0];
        eventBook = books.find(book => book.Id === actualEvent.bookId)
    }

    return (
        <Container className="col-12">
            {actualEvent !== undefined ? (
                <div className="boss">
                    <div className="boss__header">
                        <p>
                            <strong>{`Ato ${events.length}: ${actualEvent.name}`}</strong>
                        </p>
                    </div>
                    <div className="boss__body">
                        <div className="boss__body__banner col-6">
                            <Livro Book={eventBook}/>
                        </div>
                    </div>
                    <div className="boss__footer">
                        <p>
                        </p>
                        <div className="boss_footer__bossLife">
                            <div className="boss_footer__bossLife--elapsed" style={{
                                width: `${(actualEvent.life - actualEvent.damage) * 100 / actualEvent.life}%`
                            }}> 
                                HP: {actualEvent.life - actualEvent.damage} / {actualEvent.life}
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Loading />}
            
        </Container>
    )
}