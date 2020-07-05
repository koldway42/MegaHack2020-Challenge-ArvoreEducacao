import React, { useState, useEffect } from 'react';

import UserPhoto from "../../components/UserPhoto/UserPhoto"
import UserActivity from "../../components/UserActivity/UserActivity"
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => {
    const { user } = useSelector(state => state);
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        if(user.status === "FAILED") {
            setIsLoggedIn(false);
        }
    })

    useEffect(() => {
        fetch("https://5effee7bdfd1400016ae1603.mockapi.io/api/v1/Livros")
            .then(resp => resp.json())
            .then(data => setBooks(data))
    })

    return (
        <React.Fragment>
            <UserPhoto User={user} className="col-md-3 col-12" />
            <UserActivity Books={books} User={user} className="col-md-8 col-12" />
            {
                !isLoggedIn ? <Redirect to="/" /> : ""
            }
        </React.Fragment>
    )
}