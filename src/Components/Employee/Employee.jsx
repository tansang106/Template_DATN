import React, { Component } from 'react';
import Header from './Elements/Header';
import Sidebar from './Elements/Sidebar';
import Breadcrumb from './Elements/Breadcrumb';
import EmployeeList from './Elements/EmployeeList';
// import $ from 'jquery';

class Employee extends Component {

    render() {

        return (
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
                            <EmployeeList></EmployeeList>
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
        );
    }
}

export default Employee;