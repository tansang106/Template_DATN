import React, { Component } from 'react';
import LineGraph from './LineGraph';
import * as Graph from './LineBar';

class Home extends Component {

 

    render() {

        return (
            <React.Fragment>
                <div class="row page-titles">
                    <div class="col-md-5 col-8 align-self-center">
                        <h3 class="text-themecolor">Dashboard 2</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard2</li>
                        </ol>
                    </div>
                    <div class="col-md-7 col-4 align-self-center">
                        <div class="d-flex m-t-10 justify-content-end">
                            <div class="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div class="chart-text m-r-10">
                                    <h6 class="m-b-0"><small>THIS MONTH</small></h6>
                                    <h4 class="m-t-0 text-info">$58,356</h4></div>
                                <div class="spark-chart">
                                    <div id="monthchart"></div>
                                </div>
                            </div>
                            <div class="d-flex m-r-20 m-l-10 hidden-md-down">
                                <div class="chart-text m-r-10">
                                    <h6 class="m-b-0"><small>LAST MONTH</small></h6>
                                    <h4 class="m-t-0 text-primary">$48,356</h4></div>
                                <div class="spark-chart">
                                    <div id="lastmonthchart"></div>
                                </div>
                            </div>
                            <div class="">
                                <button class="right-side-toggle waves-effect waves-light btn-success btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings text-white"></i></button>
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
                <div class="row">
                    {/* Column */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center round-info"><i class="ti-wallet"></i></div>
                                    <div class="m-l-10 align-self-center">
                                        <h3 class="m-b-0 font-light">$3249</h3>
                                        <h5 class="text-muted m-b-0">Total Revenue</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center round-warning"><i class="mdi mdi-cellphone-link"></i></div>
                                    <div class="m-l-10 align-self-center">
                                        <h3 class="m-b-0 font-lgiht">$2376</h3>
                                        <h5 class="text-muted m-b-0">Online Revenue</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center round-primary"><i class="mdi mdi-cart-outline"></i></div>
                                    <div class="m-l-10 align-self-center">
                                        <h3 class="m-b-0 font-lgiht">$1795</h3>
                                        <h5 class="text-muted m-b-0">Offline Revenue</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                    {/* Column */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <div class="round round-lg align-self-center round-danger"><i class="mdi mdi-bullseye"></i></div>
                                    <div class="m-l-10 align-self-center">
                                        <h3 class="m-b-0 font-lgiht">$687</h3>
                                        <h5 class="text-muted m-b-0">Ad. Expense</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column */}
                </div>
                <div class="row">
                    {/* Column */}
                    <div class="col-lg-4 col-xlg-3 col-md-5">
                        {/* <div class="card blog-widget">
                            <div class="card-body">
                                <div class="blog-image"><img src="../assets/images/big/img1.jpg" alt="img" class="img-responsive" /></div>
                                <h3>Business development new rules for 2017</h3>
                                <label class="label label-rounded label-success">Technology</label>
                                <p class="m-t-20 m-b-20">
                                    Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                </p>
                                <div class="d-flex">
                                    <div class="read"><a href="javascript:void(0)" class="link font-medium">Read More</a></div>
                                    <div class="ml-auto">
                                        <a href="javascript:void(0)" class="link m-r-10 " data-toggle="tooltip" title="Like"><i class="mdi mdi-heart-outline"></i></a> <a href="javascript:void(0)" class="link" data-toggle="tooltip" title="Share"><i class="mdi mdi-share-variant"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>   */}
                        <div class="card">
                            <div class="card-header">
                                <div class="card-actions">
                                    <a class="" data-action="collapse"><i class="ti-minus"></i></a>
                                    <a class="btn-minimize" data-action="expand"><i class="mdi mdi-arrow-expand"></i></a>
                                    <a class="btn-close" data-action="close"><i class="ti-close"></i></a>
                                </div>
                                <h4 class="card-title m-b-0">Discount</h4>
                            </div>
                            <div class="card-body collapse show bg-info">
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    {/* Carousel items */}
                                    <div class="carousel-inner">
                                        <div class="carousel-item flex-column active">
                                            <i class="fa fa-shopping-cart fa-2x text-white"></i>
                                            <p class="text-white">25th Jan</p>
                                            <h3 class="text-white font-light">Now Get <span class="font-bold">50% Off</span><br/>
                                                on buy</h3>
                                                <div class="text-white m-t-20">
                                                    <i>- Ecommerce site</i>
                                                </div>
                                        </div>
                                            <div class="carousel-item flex-column">
                                                <i class="fa fa-shopping-cart fa-2x text-white"></i>
                                                <p class="text-white">25th Jan</p>
                                                <h3 class="text-white font-light">Now Get <span class="font-bold">50% Off</span><br/>
                                                    on buy</h3>
                                                    <div class="text-white m-t-20">
                                                        <i>- Ecommerce site</i>
                                                    </div>
                                        </div>
                                                <div class="carousel-item flex-column">
                                                    <i class="fa fa-shopping-cart fa-2x text-white"></i>
                                                    <p class="text-white">25th Jan</p>
                                                    <h3 class="text-white font-light">Now Get <span class="font-bold">50% Off</span><br/>
                                                        on buy</h3>
                                                        <div class="text-white m-t-20">
                                                            <i>- Ecommerce site</i>
                                                        </div>
                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="card-actions">
                                                <a class="" data-action="collapse">
                                                    <i class="ti-minus"></i>
                                                </a>
                                                <a class="btn-minimize" data-action="expand">
                                                    <i class="mdi mdi-arrow-expand"></i>
                                                </a>
                                                <a class="btn-close" data-action="close">
                                                    <i class="ti-close"></i>
                                                </a>
                                            </div>
                                            <h4 class="card-title m-b-0">Discount</h4>
                                        </div>
                                        <div class="card-body collapse show bg-info">
                                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                                {/* Carousel items */}
                                        <div class="carousel-inner">
                                                    <div class="carousel-item flex-column active">
                                                        <i class="fa fa-shopping-cart fa-2x text-white"></i>
                                                        <p class="text-white">25th Jan</p>
                                                        <h3 class="text-white font-light">Now Get
                                                    <span class="font-bold">50% Off</span>
                                                            <br/> on buy</h3>
                                                            <div class="text-white m-t-20">
                                                                <i>- Ecommerce site</i>
                                                            </div>
                                            </div>
                                                        <div class="carousel-item flex-column">
                                                            <i class="fa fa-shopping-cart fa-2x text-white"></i>
                                                            <p class="text-white">25th Jan</p>
                                                            <h3 class="text-white font-light">Now Get
                                                    <span class="font-bold">50% Off</span>
                                                                <br/> on buy</h3>
                                                                <div class="text-white m-t-20">
                                                                    <i>- Ecommerce site</i>
                                                                </div>
                                            </div>
                                                            <div class="carousel-item flex-column">
                                                                <i class="fa fa-shopping-cart fa-2x text-white"></i>
                                                                <p class="text-white">25th Jan</p>
                                                                <h3 class="text-white font-light">Now Get
                                                    <span class="font-bold">50% Off</span>
                                                                    <br/> on buy</h3>
                                                                    <div class="text-white m-t-20">
                                                                        <i>- Ecommerce site</i>
                                                                    </div>
                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-xlg-9 col-md-7">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex flex-wrap">
                                                            <div>
                                                                <h3 class="card-title">Total Money</h3>
                                                                <h6 class="card-subtitle">Overview of Total money</h6>
                                                            </div>
                                                            <div class="ml-auto align-self-center">
                                                                <ul class="list-inline m-b-0">
                                                                    <li>
                                                                        <h6 class="text-muted text-success"><i class="fa fa-circle font-10 m-r-10 "></i>Total  Money</h6> </li>
                                                                    {/* <li>
                                                                        <h6 class="text-muted text-info"><i class="fa fa-circle font-10 m-r-10"></i>Recurring Payments</h6> </li> */}

                                                                </ul>
                                                            </div>

                                                        </div>
                                                        {/* <div class="campaign ct-charts"></div> */}
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