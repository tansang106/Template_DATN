import React, { Component } from 'react';
import Header from './Components/Elements/Header';
import Sidebar from './Components/Elements/Sidebar';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import Loadable from 'react-loadable';
// import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Main from './Components/Main';

const LazyLogin = Loadable({
    loader: () => import("./Components/Login/Login"),
    loading: () => null
})

// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//         this.isAuthenticated = true
//         setTimeout(cb, 100)
//     },
//     signout(cb) {
//         this.isAuthenticated = false,
//             setTimeout(cb, 100)
//     }
// }

// const Public = () => <Login />
// const Protected = () => <Home />
// const PrivateRouter = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         fakeAuth.isAuthenticated === true
//             ? <Component {...props} />
//             : <Redirect to='/login'
//             />
//     )} />
// )

// import Employee from './Components/Employee';
// import $ from 'jquery';

class App extends Component {

    // state = {
    //     logged: false
    // }

    // showContentMenus = (routes) => {
    //     var result = null;
    //     if (routes.length > 0) {
    //         result = routes.map((route, index) => {
    //             console.log(route)
    //             // if (route.path != '/login') {
    //             return (
    //                 <Route
    //                     key={index}
    //                     path={route.path}
    //                     exact={route.exact}
    //                     component={route.main}
    //                 />
    //             );
    //             console.log(result);
    //             // }
    //         }
    //         )
    //     }
    //     return result;
    // }

    // reloadState = () => {
    //     this.setState({ logged: true})
    // }

    render() {
        return (

            <React.Fragment>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        render={() => {
                            document.title = "Login";
                            return <LazyLogin />;
                        }}
                    />
                    <Route render={() => <Main />} />
                </Switch>

            </React.Fragment>



        );
    }

}

export default App;