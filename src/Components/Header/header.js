import React, {useEffect, useState} from 'react';
import style from "./header.module.css"
import Search from "./Search/search";
import {Row, Col} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import logo from '../Images/logo.png'
import dollar from '../Images/dollar.png'
import vector from '../Images/Vector.png'
import {isAuthRoutes, routes} from "../../Utils/routes";
import {DOLLAR, HOME, LOGIN, REGISTRATION, SETTINGS, WEIGHT} from "../../Utils/utils";
import {NavLink, useHistory} from "react-router-dom";
import {BiCog} from "@react-icons/all-files/bi/BiCog";
import Settings from "../Settings/settings";
import Langs from "./Languages/langs";

const Header = ({searchedAllProducts, setSearchedAllProducts,name}) => {
    const {t} = useTranslation()

    const history = useHistory();
    const [showModal, setShowModal] = useState(false)
    const token =  localStorage.getItem('token');
    const logout = () => {
        localStorage.removeItem('token')
            history.push(LOGIN);
       window.location.reload();
    }

    useEffect(() => {

    }, [showModal])
    console.log(showModal)
    return (
        <div >
            <Row className={style.header}>
                <Col md={2} className={style.logo}>
                    <NavLink to={HOME}>
                        <img src={logo}/>
                    </NavLink>

                </Col>
                <Col md={3} className={style.search}>
                    <div className={style.header}>
                        <Search searchedAllProducts={searchedAllProducts} setSearchedAllProducts={setSearchedAllProducts}/>
                    </div>
                </Col>
                <Col md={2} className={style.price}>
                    <Row className={style.icons}>
                        <Col md={6} className={style.iconOne}>
                            <img src={dollar}/>
                            <NavLink to={DOLLAR} activeClassName={style.activeBord} className={style.sizee}>
                                1520
                            </NavLink>
                        </Col>
                        <Col md={6}>
                            <img src={vector}/>
                            <NavLink to={WEIGHT}  activeClassName={style.activeBord} className={style.sizee}>
                                1520
                            </NavLink>
                        </Col>
                    </Row>
                </Col>
                <Col md={2} className={style.language}>
                    <Langs/>
                </Col>
                <Col md={2} className={style.page}>
                    <Row>
                        <Col md={6} className={style.name}>
                            {
                                token  ? isAuthRoutes.map(({id, path, name}) => {
                                    return (
                                        <li key={id}>
                                            <NavLink
                                                exact to={path}
                                                className={style.sizee}
                                                activeClassName={style.activeBord}
                                            >{t('cat')}
                                            </NavLink>
                                        </li>

                                    )
                                    })
                                    :
                                    routes.map(({name, path}) => {
                                        return path !== HOME && path !==REGISTRATION && path!== WEIGHT && path !== DOLLAR && <div key={path}>
                                            <NavLink to={path} className={style.links}                                                 activeClassName={style.activeBord}
                                                      exact>Login</NavLink>
                                        </div>
                                    })
                            }
                        </Col>
                        <Col md={6}>
                            {/*<NavLink to={HOME}>*/}
                            { token && <BiCog className={style.icon} onClick={() => setShowModal(true)}/> }

                            {/*</NavLink>*/}
                            {
                                showModal &&  <Settings setShowModal={setShowModal}/>
                            }
                        </Col>
                    </Row>
                </Col>
                <Col md={1} className={style.language}>
                    {localStorage.getItem('token') && <button onClick={logout} cn="logoutButton">{t('home')}
                    </button>}
                </Col>
            </Row>
        </div>
    );
};

export default Header;