import React, { useState, useEffect  } from 'react';

import { Logo, Loading } from "../../components"
import './Login.scss';

import { Redirect } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { 
    setUserCallbackSuccess,
    setAuthCallbackError
} from '../../actions';

import backgroundImageDesktop from '../../assets/images/login-background.jpg';

const Login = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [userLogin, setUserLogin] = useState("");
    const [users, setUsers] = useState([])

    const dispatcher = useDispatch();

    const getUserByLogin = (userLogin) => users.find(e => e.login === userLogin);

    const handleLogin = (e) => {
        setisLoggedIn(true);
        setisLoading(true)

        let user = "";

        
        if(users.length > 0) user = getUserByLogin(userLogin);

        setTimeout(() => {
            if(user === undefined) {
                setisLoggedIn(false);
                setisLoading(false);
                
                alert("Usuário Não Encontrado");

                return
            }

            dispatcher(setUserCallbackSuccess(user))
            setRedirect(true);
        }, 3000)
    }

    const handleLoginChange = (e) => {
        setUserLogin(e.target.value);
    }

    useEffect(() => {
        fetch("https://5effee7bdfd1400016ae1603.mockapi.io/api/v1/user")
            .then(resp => resp.json())
            .then(data => setUsers(data))
    }, [users])

    useEffect(() => {
    })

    return (
        <main className="login" data-testid="login" style={{backgroundImage: `url(${backgroundImageDesktop})`}}>
            <div className="container" style={{width: `${isLoggedIn ? "100%" : "400px"}`}}>
                <Logo />
                {!isLoading ? (
                    <React.Fragment>
                        <input onChange={handleLoginChange} value={userLogin} type="text" name="login" id="user-login" className="login__auth-text" placeholder="Insira seu Login"/>
                        <a href="#" onClick={e => handleLogin(e)} class="login__auth-button">
                            Avançar
                        </a>
                    </React.Fragment>
                ) : (<Loading />)
                }
                {redirect ? <Redirect to="dashboard" /> : ""}
            </div>
        </main>
    );
}

export default Login;
