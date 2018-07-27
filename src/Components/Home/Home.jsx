import React, { Component } from 'react';
import LineGraph from './LineGraph';
import * as Graph from './LineBar';

class Home extends Component {

 

    render() {

        return (
            <React.Fragment>
                <div className="row page-titles">
                    <div className="col-md-5 col-8 align-self-center">
                        <h3 className="text-themecolor">Dashboard 2</h3>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard2</li>
                        </ol>
                    </div>
                    <div className="col-md-7 col-4 align-self-center">
                        <div className="d-flex m-t-10 justify-content-end">
                            <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div className="chart-text m-r-10">
                                    <h6 className="m-b-0"><small>THIS MONTH</small></h6>
                                    <h4 className="m-t-0 text-info">$58,356</h4></div>
                                <div className="spark-chart">
                                    <div id="monthchart"></div>
                                </div>
                            </div>
                            <div className="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div className="chart-text m-r-10">
                                    <h6 className="m-b-0"><small>LAST MONTH</small></h6>
                                    <h4 className="m-t-0 text-primary">$48,356</h4></div>
                                <div className="spark-chart">
                                    <div id="lastmonthchart"></div>
                                </div>
                            </div>
                            <div className="">
                                <button className="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i className="ti-settings text-white"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* End Bread crumb and right sidebar toggle */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Start Page Content */}
                {/* ============================================================== */}
                <div className="row">
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-info"><i className="ti-wallet"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        <h3 className="m-b-0 font-light">$3249</h3>
                                        <h5 className="text-muted m-b-0">Total Revenue</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-warning"><i className="mdi mdi-cellphone-link"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        <h3 className="m-b-0 font-lgiht">$2376</h3>
                                        <h5 className="text-muted m-b-0">Online Revenue</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-primary"><i className="mdi mdi-cart-outline"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        <h3 className="m-b-0 font-lgiht">$1795</h3>
                                        <h5 className="text-muted m-b-0">Offline Revenue</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-row">
                                    <div className="round round-lg align-self-center round-danger"><i className="mdi mdi-bullseye"></i></div>
                                    <div className="m-l-10 align-self-center">
                                        <h3 className="m-b-0 font-lgiht">$687</h3>
                                        <h5 className="text-muted m-b-0">Ad. Expense</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                </div>
                <div className="row">
                    {/* Column */}
                    <div className="col-lg-4 col-xlg-3 col-md-5">
                        {/* <div className="card blog-widget">
                            <div className="card-body">
                                <div className="blog-image"><img src="../assets/images/big/img1.jpg" alt="img" className="img-responsive" /></div>
                                <h3>Business development new rules for 2017</h3>
                                <label className="label label-rounded label-success">Technology</label>
                                <p className="m-t-20 m-b-20">
                                    Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                </p>
                                <div className="d-flex">
                                    <div className="read"><a href="javascript:void(0)" className="link font-medium">Read More</a></div>
                                    <div className="ml-auto">
                                        <a href="javascript:void(0)" className="link m-r-10 " data-toggle="tooltip" title="Like"><i className="mdi mdi-heart-outline"></i></a> <a href="javascript:void(0)" className="link" data-toggle="tooltip" title="Share"><i className="mdi mdi-share-variant"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>   */}
                        <div className="card">
                            <div className="card-header">
                                <div className="card-actions">
                                    <a className="" data-action="collapse"><i className="ti-minus"></i></a>
                                    <a className="btn-minimize" data-action="expand"><i className="mdi mdi-arrow-expand"></i></a>
                                    <a className="btn-close" data-action="close"><i className="ti-close"></i></a>
                                </div>
                                <h4 className="card-title m-b-0">Discount</h4>
                            </div>
                            <div className="card-body collapse show bg-info">
                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                    {/* Carousel items */}
                                    <div className="carousel-inner">
                                        <div className="carousel-item flex-column active">
                                            <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                            <p className="text-white">25th Jan</p>
                                            <h3 className="text-white font-light">Now Get <span className="font-bold">50% Off</span><br/>
                                                on buy</h3>
                                                <div className="text-white m-t-20">
                                                    <i>- Ecommerce site</i>
                                                </div>
                                        </div>
                                            <div className="carousel-item flex-column">
                                                <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                                <p className="text-white">25th Jan</p>
                                                <h3 className="text-white font-light">Now Get <span className="font-bold">50% Off</span><br/>
                                                    on buy</h3>
                                                    <div className="text-white m-t-20">
                                                        <i>- Ecommerce site</i>
                                                    </div>
                                        </div>
                                                <div className="carousel-item flex-column">
                                                    <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                                    <p className="text-white">25th Jan</p>
                                                    <h3 className="text-white font-light">Now Get <span className="font-bold">50% Off</span><br/>
                                                        on buy</h3>
                                                        <div className="text-white m-t-20">
                                                            <i>- Ecommerce site</i>
                                                        </div>
                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-actions">
                                                <a className="" data-action="collapse">
                                                    <i className="ti-minus"></i>
                                                </a>
                                                <a className="btn-minimize" data-action="expand">
                                                    <i className="mdi mdi-arrow-expand"></i>
                                                </a>
                                                <a className="btn-close" data-action="close">
                                                    <i className="ti-close"></i>
                                                </a>
                                            </div>
                                            <h4 className="card-title m-b-0">Discount</h4>
                                        </div>
                                        <div className="card-body collapse show bg-info">
                                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                                {/* Carousel items */}
                                        <div className="carousel-inner">
                                                    <div className="carousel-item flex-column active">
                                                        <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                                        <p className="text-white">25th Jan</p>
                                                        <h3 className="text-white font-light">Now Get
                                                    <span className="font-bold">50% Off</span>
                                                            <br/> on buy</h3>
                                                            <div className="text-white m-t-20">
                                                                <i>- Ecommerce site</i>
                                                            </div>
                                            </div>
                                                        <div className="carousel-item flex-column">
                                                            <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                                            <p className="text-white">25th Jan</p>
                                                            <h3 className="text-white font-light">Now Get
                                                    <span className="font-bold">50% Off</span>
                                                                <br/> on buy</h3>
                                                                <div className="text-white m-t-20">
                                                                    <i>- Ecommerce site</i>
                                                                </div>
                                            </div>
                                                            <div className="carousel-item flex-column">
                                                                <i className="fa fa-shopping-cart fa-2x text-white"></i>
                                                                <p className="text-white">25th Jan</p>
                                                                <h3 className="text-white font-light">Now Get
                                                    <span className="font-bold">50% Off</span>
                                                                    <br/> on buy</h3>
                                                                    <div className="text-white m-t-20">
                                                                        <i>- Ecommerce site</i>
                                                                    </div>
                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-xlg-9 col-md-7">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex flex-wrap">
                                                            <div>
                                                                <h3 className="card-title">Total Money</h3>
                                                                <h6 className="card-subtitle">Overview of Total money</h6>
                                                            </div>
                                                            <div className="ml-auto align-self-center">
                                                                <ul className="list-inline m-b-0">
                                                                    <li>
                                                                        <h6 className="text-muted text-success"><i className="fa fa-circle font-10 m-r-10 "></i>Total  Money</h6> </li>
                                                                    {/* <li>
                                                                        <h6 className="text-muted text-info"><i className="fa fa-circle font-10 m-r-10"></i>Recurring Payments</h6> </li> */}

                                                                </ul>
                                                            </div>

                                                        </div>
                                                        {/* <div className="campaign ct-charts"></div> */}
                                                        <LineGraph/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
            </React.Fragment>
        );
    }
}

export default Home;