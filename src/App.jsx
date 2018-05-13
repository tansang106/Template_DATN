import React, { Component } from 'react';
import Header from './Components/Elements/Header';
import Sidebar from './Components/Elements/Sidebar';
import Breadcrumb from './Components/Elements/Breadcrumb';
import EmployeeList from './Components/Employee/EmployeeList';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import CoffeeShopList from './Components/CoffeeShop/CoffeeShopList';
import CoffeeShopGrid from './Components/CoffeeShop/CoffeeShopGrid';
import CoffeeShopDetail from './Components/CoffeeShop/CoffeeShopDetail';
import Invoice from './Components/Invoice/Invoice';
import NotFound from './Components/404/NotFound';
import routes from './routes';
import Login from './Components/Login/Login';
// import Employee from './Components/Employee';
// import $ from 'jquery';



class App extends Component {

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                console.log(route)
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
                console.log(result);
            }
            )
        }
        return result;
    }

    render() {

        return (
            <Router>
                <React.Fragment>

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
                        <Header></Header>
                        {/* ============================================================== */}
                        {/* End Topbar header */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Left Sidebar - style you can find in sidebar.scss  */}
                        {/* ============================================================== */}
                        <Sidebar></Sidebar>
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
                                <Breadcrumb></Breadcrumb>
                                {/* ============================================================== */}
                                {/* End Bread crumb and right sidebar toggle */}
                                {/* ============================================================== */}
                                {/* ============================================================== */}
                                {/* Start Page Content */}
                                {/* ============================================================== */}
                                <Switch>
                                    {/* <Login></Login> */}
                                    {this.showContentMenus(routes)}
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
            </Router>


        );
    }

}

export default App;