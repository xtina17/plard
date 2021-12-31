import React, {useEffect, useState} from 'react';
import style from "./loginPage.module.css"
import {Col, Row} from "react-bootstrap";
import Input from "../Global/Input/input";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import {routes, routesTwo} from "../../Utils/routes";
import {DOLLAR, HOME, LOGIN, WEIGHT} from "../../Utils/utils";
import {NavLink, useHistory} from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Global/Button/button";
import Redirect from "react-router-dom/es/Redirect";

const LoginPage = ({children}) => {
    const history = useHistory()

    // const [email, setEmail] = useState('')
    // const [passwords, setPasswords] = useState('')
    //
    // const changeEmail = (e) => {
    //     setEmails(e.target.value)
    // }
    // const changePassword = (e) => {
    //     setPasswords(e.target.value)
    // }

    //validate
    const email = useForm(
        '',
        'email',
        {isEmpty: true, isEmail: false}
    )
    const password = useForm(
        '',
        'password',
        {isEmpty: true, isPassword: false}
    )


    const login = (e) =>{
        e.preventDefault()

        let emailLocal = JSON.parse(localStorage.getItem('user'))['email']
        let passwordLocal = JSON.parse(localStorage.getItem('user'))['password']

        console.log(emailLocal, passwordLocal)
        console.log(email.value, password.value)

        if( emailLocal === email.value && passwordLocal === password.value) {
            localStorage.setItem('token', "123454");
            //there is our token
            // if there is token, send by link
        }

        if (localStorage.getItem('token')) {
            history.push(HOME);
            window.location.reload();
        }
        // history.push("/")
    }


    useEffect(() => {
        console.log(email, password)
    }, [email, password])

    const onSubmit = (e) => {
        e.preventDefault()
        return null
    }
    return (
        <div className={style.loginBg}>
            <div className={style.loginBgTwo}>
                <div className={style.login}>
                    <div className={style.log}>
                        <form onSubmit={login}>
                            <div>
                                <span>Эл. адрес</span>
                            </div>
                            <div>
                                <Input
                                    value={email.value}
                                    onChange={email.onChange}
                                    onBlur={email.onBlur}
                                    error={email.isTouched ? email.errors.email : null}
                                    name='email'
                                    type="text"
                                    cn="inputLog"/>
                            </div>
                            <div>
                                <span>Пароль</span>
                            </div>
                            <div>
                                <Input
                                    value={password.value}
                                    onChange={password.onChange}
                                    onBlur={password.onBlur}
                                    error={password.isTouched ? password.errors.password : null}
                                    name='password'
                                    type="password"
                                    cn="inputReg"/>
                            </div>
                            <div>
                                <span> <Checkbox defaultChecked/>Запомни меня</span>
                            </div>
                            <div>
                                {/*<button className={style.buttonLog} disabled={false}>*/}
                                {/*    Вход*/}
                                {/*</button>*/}
                                <Button className={style.buttonLog}

                                        disabled={!email.isValidateForm || !password.isValidateForm }>Вход</Button>
                            </div>
                            <div>
                                {
                                    routes.map(({name, path}) => {
                                     return path !== LOGIN && path !== WEIGHT && path !== DOLLAR && (
                                        <span key={path}>
                                            <NavLink to={path} className={style.link} activeClassName='active' exact>{name}</NavLink>
                                        </span>
                                     )
                                    })
                                }
                            </div>

                        </form>
                    </div>
                    <div className={style.bg}>
                        <p>
                            <span>Plard</span>Gold
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;