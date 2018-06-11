import React, { Component } from 'react';
import Header from './Elements/Header';
import Sidebar from './Elements/Sidebar';
import Breadcrumb from './Elements/Breadcrumb';
import EmployeeList from './Employee/EmployeeList';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import CoffeeShopList from './CoffeeShop/CoffeeShopList';
import CoffeeShopGrid from './CoffeeShop/CoffeeShopGrid';
import CoffeeShopDetail from './CoffeeShop/CoffeeShopDetail';
import Invoice from './Invoice/Invoice';
import NotFound from './404/NotFound';
import routes from '../routes';
import Login from './Login/Login';
// import Employee from './Components/Employee';
// import $ from 'jquery';



class Main extends Component {

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
                                {/* <Home></Home> */}
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

export default Main;