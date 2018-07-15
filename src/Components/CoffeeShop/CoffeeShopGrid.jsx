import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import CoffeeShopDetail from './CoffeeShopDetail';
import Home from '../Home/Home';
import CoffeeDetail from './CoffeeDetail';
import {connect} from 'react-redux';
import axios from 'axios';
import callApi from '../../Utils/apiCaller';
import { actFetchShopRequest } from '../../Actions/index';

class CoffeeShopGrid extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            shops: []
        }
    }
    

    componentDidMount() {
        callApi('shops/get-list', 'GET', null, {
            'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjJAZ21haWwuY29tIiwiaWF0IjoxNTI2Njk2Njc5fQ.mMmoD11AmjiyARIWufhJDl3LifDAf8LqSAzKEzeV7bE"
        }).then(res => {
            console.log('res data', res)
            this.setState({
                shops: res.data.shops
            })
        });
        this.props.fetchAllShops();
    }
    
    showShops = (shops, url) => {
        // let { match } = this.props; // this.props.match
        // let url = match.url;
        let result = null;
        if (shops.length > 0 ) {
            result = shops.map((shop, index) => {
                return (
                    <div className="col-md-6 col-lg-6 col-xlg-4" key={index}>
                            <div className="card card-body">
                                <div className="row">
                                    <div className="col-md-4 col-lg-3 text-center">
                                    <NavLink to={`${url}/${shop.shop_id}`}><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></NavLink>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                        <h3 className="box-title m-b-0">{shop.shop_name}</h3> <small>{shop.shop_email}</small>
                                        <address>
                                           {shop.shop_address}
                                            <br />
                                            <br />
                                            <abbr title="Phone">P:</abbr> {shop.shop_phone}
                                        </address>
                                    </div>
                                </div>
                        </div>
                    </div>
                )
            })
        }
        return result;
    }
    render() {

        // axios({
        //     method: 'POST',
        //     url: 'http://108.160.130.103/users/login',
        //     data: {
        //         user_password: '2',
        //         user_email: '2@gmail.com'
        //     }
        // }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err);
            
        // })

        // var { shops } = this.props
        // console.log(shops)
       
        var { match } = this.props; // this.props.match
        var url = match.url;

        var {shopData} = this.props;
        // var result = items.map((item, index) => {
        //     return (
        //         <div className="col-md-6 col-lg-6 col-xlg-4" key={index}>
        //                 <div className="card card-body">
        //                     <div className="row">
        //                         <div className="col-md-4 col-lg-3 text-center">
        //                         <NavLink to={`${url}/${item.slug}`}><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></NavLink>
        //                         </div>
        //                         <div className="col-md-8 col-lg-9">
        //                             <h3 className="box-title m-b-0">{item.name}</h3> <small>{item.job}</small>
        //                             <address>
        //                                 795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
        //                                 <br />
        //                                 <br />
        //                                 <abbr title="Phone">P:</abbr> {item.phone}
        //                             </address>
        //                         </div>
        //                     </div>
        //             </div>
                    
        //         </div>
                
        //     )
        // }
        // )

        // var result = shops.map((shop, index) => {
        //     return (
        //         <div className="col-md-6 col-lg-6 col-xlg-4" key={index}>
        //                 <div className="card card-body">
        //                     <div className="row">
        //                         <div className="col-md-4 col-lg-3 text-center">
        //                         <NavLink to={`${url}/${shop.shop_id}`}><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></NavLink>
        //                         </div>
        //                         <div className="col-md-8 col-lg-9">
        //                             <h3 className="box-title m-b-0">{shop.shop_name}</h3> <small>{shop.shop_email}</small>
        //                             <address>
        //                                {shop.shop_address}
        //                                 <br />
        //                                 <br />
        //                                 <abbr title="Phone">P:</abbr> {shop.shop_phone}
        //                             </address>
        //                         </div>
        //                     </div>
        //             </div>
        //         </div>
                
        //     )
        // })

        var {location} = this.props;
        console.log(location); 

        return (
            <div className="row">
                {this.showShops(shopData, url)}
                <div className="card card-body">
                    <Route path="/coffeegrid/:slug" component={CoffeeDetail} />
                </div>
                {/* <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/2.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/3.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/4.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/5.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/6.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/7.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/8.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/2.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/3.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-6 col-xlg-4">
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-4 col-lg-3 text-center">
                                <a href="app-contact-detail.html"><img src="../assets/images/users/4.jpg" alt="user" className="img-circle img-responsive" /></a>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <h3 className="box-title m-b-0">Johnathan Doe</h3> <small>Web Designer</small>
                                <address>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                    </address>
                            </div>
                        </div>
                    </div>
                </div>
                */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shopData: state.shops
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllShops: () => {
            dispatch(actFetchShopRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShopGrid);