import React, { Component } from 'react';
import Header from './Components/Elements/Header';
import Sidebar from './Components/Elements/Sidebar';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';

import routes from './routes';

// import Employee from './Components/Employee';
// import $ from 'jquery';

class App extends Component {

    state = {
        logged: false
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                console.log(route)
                // if (route.path != '/login') {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
                console.log(result);
                // }
            }
            )
        }
        return result;
    }

    reloadState = () => {
        this.setState({ logged: true})
    }

    render() {
        // if (localStorage.getItem("tokenUser") && localStorage.getItem("dataUser")) {
        //     // <Router>
        //     // return   <Main></Main> 
        //     // </Router>   
        //     // <Redirect to='/main'/>
        //     <Redirect to='/' />
        //     // render = <Main></Main>
        //     // <Redirect to='/home'/>
        //     // render = <Redirect to='/'/>
        // }
        // else {
        //     // render = <Login></Login>
        //     <Redirect to='/login' />
        // }
        var main;
        if (localStorage.getItem('dataUser') != null) {
            //  this.setState({ logger: true })
            // this.reloadState();
            main = <React.Fragment>

                {/* ============================================================== */}
                {/* Preloader - style you can find in spinners.css */}
                {/* ============================================================== */}
                <div className="preloader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" /> </svg>
                </div>
                {/* ============================================================== */}
                {/* Main wrapper - style you can find in pages.scss */}
                {/* ============================================================== */}
                <div id="main-wrapper">

                    {/* ============================================================== */}
                    {/* Topbar header - style you can find in pages.scss */}
                    {/* ============================================================== */}
                    <Header number={this.state.number}></Header>
                    {/* ============================================================== */}
                    {/* End Topbar header */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Left Sidebar - style you can find in sidebar.scss  */}
                    {/* ============================================================== */}
                    <Sidebar updated={this.state.logged}></Sidebar>
                    {/* ============================================================== */}
                    {/* End Left Sidebar - style you can find in sidebar.scss  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Page wrapper  */}
                    {/* ============================================================== */}
                    <div className="page-wrapper">
                        {/* ============================================================== */}
                        {/* Container fluid  */}
                        {/* ============================================================== */}
                        <div className="container-fluid">
                            {/* ============================================================== */}
                            {/* Bread crumb and right sidebar toggle */}
                            {/* ============================================================== */}
                            {/* <Breadcrumb></Breadcrumb> */}
                            {/* ============================================================== */}
                            {/* End Bread crumb and right sidebar toggle */}
                            {/* ============================================================== */}
                            {/* ============================================================== */}
                            {/* Start Page Content */}
                            {/* ============================================================== */}
                            {/* <Home></Home> */}
                            {/* <button onClick={() => this.setState({ number: 2 })}>aaaaa</button> */}
                            <Switch>
                                {/* <Login></Login> */}
                                {this.showContentMenus(routes)}
                                {/* {main} */}
                            </Switch>

                            {/* ============================================================== */}
                            {/* End PAge Content */}
                            {/* ============================================================== */}
                            {/* ============================================================== */}
                        </div>
                        {/* ============================================================== */}
                        {/* End Container fluid  */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* footer */}
                        {/* ============================================================== */}
                        <footer className="footer"> © Design by ST Team</footer>
                        {/* ============================================================== */}
                        {/* End footer */}
                        {/* ============================================================== */}
                    </div>
                    {/* ============================================================== */}
                    {/* End Page wrapper  */}
                    {/* ============================================================== */}
                </div>
                {/* ============================================================== */}
                {/* End Wrapper */}
                {/* ============================================================== */}


            </React.Fragment>
            // </Router>
            

                //  return <Redirect to='/home' />
        } else {
            return <Login updated={this.reloadState}></Login>
        };
        
        
        return (
            <React.Fragment>
                {main}
                
        </React.Fragment>
        );
    }

}

export default App;