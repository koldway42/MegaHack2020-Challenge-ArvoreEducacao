import React, { useState, useEffect } from 'react';

import Container from "../Container/Container";
import Livro from "../../components/Livro/Livro";
import Loading from "../../components/Loading/Loading"

import { useSelector } from 'react-redux';

import "./ReadingList.scss"

export default () => {
    const { user } = useSelector(state => state);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://5effee7bdfd1400016ae1603.mockapi.io/api/v1/Livros")
            .then(resp => resp.json())
            .then(data => setBooks(data))
    })

    const userReadingList = user.readingList;

    let readBooks;
    let plannedBooks;
    let droppedBooks;

    if(books.length) {
        readBooks = userReadingList.completed.map(completed => {
            return books.find(book => book.Id == completed.bookId)
        })

        plannedBooks = userReadingList.plan_to_read.map(plan_to_read => {
            return books.find(book => book.Id == plan_to_read.bookId)
        })

        droppedBooks = userReadingList.dropped.map(dropped => {
            return books.find(book => book.Id == dropped.bookId)
        })

    }

    return (
        <Container className="col-12" >
                    <div className="ReadingList">
                        <Container className="col-12" >
                            <div className="ReadingList__Header">
                                <p>
                                    <strong>Completados({readBooks && readBooks.length ? readBooks.length : 0})</strong>
                                </p>
                            </div>
                            <div className="ReadingList__Body">
                                {readBooks ? readBooks.map(book => {
                                    return(
                                        <Livro Book={book} className="col-12 col-md-3" />
                                    )
                                }): <Loading />}
                            </div>
                        </Container>
                        <Container className="col-12" >
                            <div className="ReadingList__Header">
                                <p>
                                    <strong>Planejados({plannedBooks && plannedBooks.length ? plannedBooks.length : 0})</strong>
                                </p>
                            </div>
                            <div className="ReadingList__Body">
                                {plannedBooks ? plannedBooks.map(book => {
                                    return(
                                        <Livro Book={book} className="col-12 col-md-3" />
                                    )
                                }): <Loading />}
                            </div>
                        </Container>
                        <Container className="col-12" >
                            <div className="ReadingList__Header ReadingList__Header--dropped">
                                <strong>Desistências({droppedBooks && droppedBooks.length ? droppedBooks.length : 0})</strong>
                            </div>
                            <div className="ReadingList__Body">
                                {droppedBooks ? droppedBooks.map(book => {
                                    return(
                                        <Livro Book={book} className="col-12 col-md-3" />
                                    )
                                }): <Loading />}
                            </div>
                        </Container>
                    </div>
        </Container>
    )
}