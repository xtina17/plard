import {DOLLAR, HOME, LOGIN, REGISTRATION, SETTINGS, WEIGHT} from "./utils";
import LoginPage from "../Components/LoginPage/loginPage";
import Main from "../Components/Main/main";
import RegistrationPage from "../Components/RegistrationPage/registrationPage";
import Settings from "../Components/Settings/settings";
import Dollar from "../Components/Dollar/dollar";
import Weight from "../Components/Weight/weight";
export const routes = [
    {
        path: LOGIN,
        component: LoginPage,
        name:"login"
    } ,
    {path: REGISTRATION,
        component: RegistrationPage,
        name:"Register here"
    }, {
        path: DOLLAR,
        component: Dollar,
    },
    {
        path: WEIGHT,
        component: Weight,
    }
]
export const isAuthRoutes = [
    {
        path: HOME,
        component: Main,
        name: "my page"
    }
]
