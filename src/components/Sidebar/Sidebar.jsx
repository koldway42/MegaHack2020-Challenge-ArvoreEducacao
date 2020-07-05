import React from "react";
import BurgerMenu from "react-burger-menu"
import "./Sidebar.scss"
import Logo from "../Logo/Logo"

import { Link } from "react-router-dom"

export default ({ pageWrapId, outerContainerId }) => {
    const Menu = BurgerMenu["push"]
    return (
        <Menu id="push" pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
            <div id="logo">
                <Logo />
            </div>
            <Link to="/dashboard" className="menu-item">
                <p>
                    <i class="far fa-user"></i> <strong>Perfil</strong>
                </p>
            </Link>
            <Link to="/dashboard/catalog" className="menu-item">
                <p>
                    <i class="far fa-list-alt"></i> <strong>Catálogo</strong>
                </p>
            </Link>
            <Link to="/dashboard/readingList" className="menu-item">
                <p>
                    <i class="far fa-bookmark"></i> <strong>Lista de Leitura</strong>
                </p>
            </Link>
            <Link to="/dashboard/season" className="menu-item">
                <p>
                    <i class="far fa-calendar-alt"></i> <strong>Temporada</strong>
                </p>
            </Link>
        </Menu>
    );
}