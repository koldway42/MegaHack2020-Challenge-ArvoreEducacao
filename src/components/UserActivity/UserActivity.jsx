import React, {useState} from 'react';

import Container from "../../containers/Container/Container"
import Livro from "../Livro/Livro"

import "./UserActivity.scss"
import Loading from '../Loading/Loading';

export default ({ className, User, Books, FilterBooks }) => {
    const UserCompletedReading = User.readingList.completed
    let CompletedReading

    if(UserCompletedReading.length) {
        CompletedReading = UserCompletedReading.map(completedBook => {
            return Books.find(book => book.Id == completedBook.bookId)
        })
    }

    return(
        <React.Fragment>
            <Container className={className} >
                <div className="UserActivity">
                    <div className="UserActivity__Header">
                        <p>
                            <strong>
                                Últimas Atividades
                            </strong>
                        </p>
                    </div>
                    <div className="UserActivity__Body">
                        {
                            CompletedReading.length ? (
                                CompletedReading.map(book => (
                                    <Livro Book={book} className={"col-12 col-md-4"} />
                                ))
                            ) : <Loading />
                        }
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}