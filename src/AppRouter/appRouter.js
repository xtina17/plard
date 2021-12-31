import React from 'react';
import {Switch, Redirect, Route, useHistory} from 'react-router-dom'
import {HOME, LOGIN} from "../Utils/utils"
import {routes, routesTwo, isAuthRoutes, setRoute, twoRoutes} from "../Utils/routes";
import Main from "../Components/Main/main";

const AppRouter = ({setSearchedAllProducts,searchedAllProducts}) => {
    const {pathname} = useHistory()
    let token = localStorage.getItem('token');
    console.log(token)
    return (
        <Switch>
            {
                isAuthRoutes.map(({id, path, component}) => {
                    return <Route key={id} path={path}
                                  render={() => <Main setSearchedAllProducts={setSearchedAllProducts}
                                                      searchedAllProducts={searchedAllProducts}/>} exact/>
                })

            }
            {
                routes.map(({path, component}) => {
                    if(path === HOME){
                    return <Route key={path} path={path}  exact/>
                    } else {
                    return <Route key={path} path={path} component={component} exact/>
                    }

                })
            }
            {/*{*/}
            {/*    token && setRoute.map(({ path, component}) => {*/}
            {/*     return <Route key={path} path={path} component={component} exact/>*/}
            {/*         })*/}
            {/*}*/}
            {/*{*/}
            {/*   twoRoutes.map(({ path, component}) => {*/}
            {/*     return <Route key={path} path={path} component={component} exact/>*/}
            {/*         })*/}
            {/*}*/}

            {/*<Redirect to={token ? HOME : LOGIN}/>*/}
        </Switch>
    );
};

export default AppRouter;