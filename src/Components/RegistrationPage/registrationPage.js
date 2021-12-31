import React, {useState} from 'react';
import Input from "../Global/Input/input";
import {Checkbox} from "@material-ui/core";
import style from "./registrationPage.module.css";
import {useHistory} from "react-router-dom";
import Button from "../Global/Button/button";
import useForm from "../../Hooks/useForm";


const RegistrationPage = () => {
    const history = useHistory();//for->location

    const eemail = useForm(
        '',
        'eemail',
        {isEmpty: true, isEmail: false}
    )
    const passwordd = useForm(
        '',
        'passwordd',
        {isEmpty: true, isPassword: false}
    )

    const confirmPasswordd = useForm(
        '',
        'confirmPasswordd',
        {isEmpty: true, isConfirmPassword: false}
    )

    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const changeUserName = (e) => {
        setUsername(e.target.value); //for value    e = event;
        //target = element where this event came from;
        //value ->we know :)
    }
    const changeEmail = (e) => {
        setEmail(eemail.value);
    }
    const changePassword = (e) => {
        setPassword(passwordd.value);
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(confirmPasswordd.value);
    }
    const registration = (e) => {
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify({ //setItem -> for add and update
            name:userName,
            email:eemail.value,
            password:passwordd.value,
            confirmPassword:confirmPasswordd.value
        }))
        history.push('/login')
    }



    return (
        <div>
            <div className={style.regBg}>
                <div className={style.regBgTwo}>
                    <div className={style.register}>
                        <div className={style.bg}>
                            <p>
                                <span>Plard</span>Gold
                            </p>
                        </div>
                        <div className={style.reg}>
                            <form onSubmit={registration}>
                                <div>
                                    <p className={style.regP}>
                                        Регистрация
                                    </p>
                                </div>
                                <div>
                                    <span>Полное имя</span>
                                </div>
                                <div>
                                    <Input type="text" cn="inputLog"
                                           value={userName}
                                           onChange={changeUserName}/>
                                </div>
                                <div>
                                    <span>Эл. адрес</span>
                                </div>
                                <div>
                                    <Input
                                        value={eemail.value}
                                        onChange={eemail.onChange}
                                        onBlur={eemail.onBlur}
                                        error={eemail.isTouched ? eemail.errors.eemail : null}
                                        name='eemail'
                                        label="E-mail*"
                                        cn="inputLog"
                                    />
                                </div>
                                <div>
                                    <span>Пароль</span>
                                </div>
                                <div>
                                    <Input
                                        value={passwordd.value}
                                        onChange={passwordd.onChange}
                                        onBlur={passwordd.onBlur}
                                        error={passwordd.isTouched ? passwordd.errors.passwordd : null}
                                        name='passwordd'
                                        label="Password*"
                                        type="password"
                                        cn="inputLog"
                                    />
                                </div>
                                <div>
                                    <span>Пароль</span>
                                </div>
                                <div>
                                    <Input
                                        value={confirmPasswordd.value}
                                        onChange={confirmPasswordd.onChange}
                                        onBlur={confirmPasswordd.onBlur}
                                        error={confirmPasswordd.isTouched ? confirmPasswordd.errors.confirmPasswordd : null}
                                        name='confirmPasswordd'
                                        label="Confirm Password*"
                                        type="password"
                                        cn="inputLog"
                                    />
                                </div>
                                <div>
                                    <span> <Checkbox defaultChecked/>Я согласен(а) </span>
                                </div>
                                <div>
                                    {/*<button className={style.buttonReg}>*/}
                                    {/*    Вход*/}
                                    {/*</button>*/}
                                    {/*<button className={style.buttonReg}>*/}
                                    {/*    Вход*/}
                                    {/*</button>*/}
                                    <Button className={style.buttonReg}
                                            disabled={!eemail.isValidateForm || !passwordd.isValidateForm
                                             || !confirmPasswordd.isValidateForm}>Вход</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;