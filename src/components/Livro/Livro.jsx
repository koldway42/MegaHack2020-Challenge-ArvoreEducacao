import React from 'react';

import Container from "../../containers/Container/Container"
import Loading from '../Loading/Loading';

import "./Livro.scss"

export default ({ Book, className }) => {
    return(
        <Container className={className}>
            {
                Book !== undefined ? (
                    <div className="Livro">
                        <div className="Livro__Header">
                            <p>
                                <strong>
                                    {Book.name}
                                </strong>
                            </p>
                        </div>
                        <figure className="Livro__Banner">
                            <img src={`/assets/Books/${Book.path}.jpg`} alt=""/>
                        </figure>
                    </div>
                ) : <Loading />
            }
            
        </Container>
    )
}