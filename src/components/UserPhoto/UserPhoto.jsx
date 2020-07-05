import React from 'react';

import Container from "../../containers/Container/Container"
import DefaultImage from "../../assets/images/DefaultImage.png"
import Loading from "../../components/Loading/Loading"

import "./UserPhoto.scss"

export default ({ User, className }) => {


    return(
        <React.Fragment>
            <Container className={className} >
                {
                    User ? (
                        <React.Fragment>
                            <div className="UserPhoto">
                                <div className="UserPhoto__Body">
                                    <figure className="UserPhoto__Photo">
                                        <img src={User.avatar} alt="Teste"/>
                                    </figure>
                                </div>
                                <div className="UserPhoto__Footer">

                                    <p><strong>{User.username}</strong> <span>@{User.username.toLowerCase()}</span></p>
                                </div>
                            </div>
                            <div className="userInfo">
                                <div className="userInfo__Header">
                                    <strong>Lista de Leitura</strong>
                                </div>
                                <div className="userInfo__ReadingInfo">
                                    <div className="userInfo__ReadingInfo--completed col-4">
                                        <p>
                                            <strong>Completo</strong> <span>{User.readingList.completed.length}</span>
                                        </p>
                                    </div>
                                    <div className="userInfo__ReadingInfo--planned col-4">
                                        <p>
                                            <strong>Planeja</strong> <span>{User.readingList.plan_to_read.length}</span>
                                        </p>
                                    </div>
                                    <div className="userInfo__ReadingInfo--dropped col-4">
                                        <p>
                                            <strong>Dropou</strong> <span>{User.readingList.dropped.length}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ) : <Loading />
                }
                
            </Container>
        </React.Fragment>
    )
}