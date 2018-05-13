import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import CoffeeShopDetail from './CoffeeShopDetail';
import Home from '../Home/Home';
import CoffeeDetail from './CoffeeDetail';

class CoffeeShopGrid extends Component {
    render() {

        var items = [
            {
                slug: '1',
                name: 'Name 1',
                job: 'Web design',
                phone: 34958340
            },
            {
                slug: '2',
                name: 'Name 2',
                job: 'Web design',
                phone: 349345340
            },
            {
                slug: '3',
                name: 'Name 3',
                job: 'Web design',
                phone: 34958540
            },
        ];

        var { match } = this.props; // this.props.match
        var url = match.url;

        var result = items.map((item, index) => {
            return (
                <div className="col-md-6 col-lg-6 col-xlg-4" key={index}>
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-4 col-lg-3 text-center">
                                <NavLink to={`${url}/${item.slug}`}><img src="../assets/images/users/1.jpg" alt="user" className="img-circle img-responsive" /></NavLink>
                                </div>
                                <div className="col-md-8 col-lg-9">
                                    <h3 className="box-title m-b-0">{item.name}</h3> <small>{item.job}</small>
                                    <address>
                                        795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                        <br />
                                        <br />
                                        <abbr title="Phone">P:</abbr> {item.phone}
                                    </address>
                                </div>
                            </div>
                    </div>
                    
                </div>
                
            )
        }
        )

        var {location} = this.props;
        console.log(location); 

        return (
            <div className="row">
                {result}
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

export default CoffeeShopGrid;