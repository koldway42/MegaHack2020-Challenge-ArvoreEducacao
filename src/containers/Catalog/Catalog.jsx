import React, { useState, useEffect } from 'react';

import Container from "../Container/Container";
import Livro from "../../components/Livro/Livro"
import Loading from "../../components/Loading/Loading"

import "./Catalog.scss"

export default () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://5effee7bdfd1400016ae1603.mockapi.io/api/v1/Livros")
            .then(resp => resp.json())
            .then(data => setBooks(data))
    })

    return(
        <Container className="col-12">
            <div className="Catalog">
                <div className="Catalog__Body">
                    { books.length ? books.map(book => (
                        <Livro Book={book} className="col-12 col-md-2" />
                    )): <Loading />}
                </div>
            </div>
        </Container>
    )
}