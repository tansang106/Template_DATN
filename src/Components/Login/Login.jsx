import React, { Component } from 'react';
import {Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            txtUsername: '',
            txtPassword: '',
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onLogin = (e) => {
        e.preventDefault(); 
        var { txtUsername, txtPassword} = this.state;
        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem("user",JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
        }
    }

    render() {

        var { txtUsername, txtPassword } = this.state;
        var loggedInUser = localStorage.getItem('user');
        if(loggedInUser !== null){
            var {location} = this.props;
            return <Redirect to={{
                pathname: '/coffeegrid',
                state: {
                    from: location
                }
            }}/>
        }
        return (
            // <React.Fragment>
            //     <div className="preloader">
            //         <svg className="circular" viewBox="25 25 50 50">
            //             <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
            //     </div>
            //     {/* ============================================================== */}
            //     {/* Main wrapper - style you can find in pages.scss */}
            //     {/* ============================================================== */}
            //     <section id="wrapper">
            //         <div className="login-register login_background">
            //             <div className="login-box card">
            //                 <div className="card-body">
            //                     <form className="form-horizontal form-material" id="loginform" action="index.html">
            //                         <h3 className="box-title m-b-20">Sign In</h3>
            //                         <div className="form-group ">
            //                             <div className="col-xs-12">
            //                                 <input className="form-control" type="text" required="" placeholder="Username" /> </div>
            //                         </div>
            //                         <div className="form-group">
            //                             <div className="col-xs-12">
            //                                 <input className="form-control" type="password" required="" placeholder="Password" /> </div>
            //                         </div>
            //                         <div className="form-group">
            //                             <div className="col-md-12">
            //                                 <div className="checkbox checkbox-primary pull-left p-t-0">
            //                                     <input id="checkbox-signup" type="checkbox" />
            //                                     <label for="checkbox-signup" > Remember me </label>
            //                                 </div> <a href="javascript:void(0)" id="to-recover" className="text-dark pull-right"><i className="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
            //                         </div>
            //                         <div className="form-group text-center m-t-20">
            //                             <div className="col-xs-12">
            //                                 <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In</button>
            //                             </div>
            //                         </div>
            //                         <div className="row">
            //                             <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
            //                                 <div className="social">
            //                                     <a href="javascript:void(0)" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fa fa-facebook"></i> </a>
            //                                     <a href="javascript:void(0)" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fa fa-google-plus"></i> </a>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                         <div className="form-group m-b-0">
            //                             <div className="col-sm-12 text-center">
            //                                 <p>Don't have an account? <a href="register.html" className="text-info m-l-5"><b>Sign Up</b></a></p>
            //                             </div>
            //                         </div>
            //                     </form>
            //                     <form className="form-horizontal" id="recoverform" action="index.html">
            //                         <div className="form-group ">
            //                             <div className="col-xs-12">
            //                                 <h3>Recover Password</h3>
            //                                 <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
            //                             </div>
            //                         </div>
            //                         <div className="form-group ">
            //                             <div className="col-xs-12">
            //                                 <input className="form-control" type="text" required="" placeholder="Email" /> </div>
            //                         </div>
            //                         <div className="form-group text-center m-t-20">
            //                             <div className="col-xs-12">
            //                                 <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
            //                             </div>
            //                         </div>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //     </section>
            // </React.Fragment >
            <div className="card-body">
                <form className="form-horizontal form-material" id="loginform" action="index.html" onSubmit={this.onLogin}>
                    <h3 className="box-title m-b-20">Sign In</h3>
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input
                                className="form-control"
                                type="text" required=""
                                placeholder="Username"
                                name="txtUsername"
                                value={txtUsername}
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-12">
                            <input
                                className="form-control"
                                type="password" required=""
                                placeholder="Password"
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.onChange}
                            /> </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <div className="checkbox checkbox-primary pull-left p-t-0">
                                <input id="checkbox-signup" type="checkbox" />
                                <label for="checkbox-signup" > Remember me </label>
                            </div> <a href="javascript:void(0)" id="to-recover" className="text-dark pull-right"><i className="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
                    </div>
                    <div className="form-group text-center m-t-20">
                        <div className="col-xs-12">
                            <button
                                className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                                type="submit"
                            >Log In</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                            <div className="social">
                                <a href="javascript:void(0)" className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fa fa-facebook"></i> </a>
                                <a href="javascript:void(0)" className="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fa fa-google-plus"></i> </a>
                            </div>
                        </div>
                    </div>
                    <div className="form-group m-b-0">
                        <div className="col-sm-12 text-center">
                            <p>Don't have an account? <a href="register.html" className="text-info m-l-5"><b>Sign Up</b></a></p>
                        </div>
                    </div>
                </form>
                <form className="form-horizontal" id="recoverform" action="index.html">
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <h3>Recover Password</h3>
                            <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control" type="text" required="" placeholder="Email" /> </div>
                    </div>
                    <div className="form-group text-center m-t-20">
                        <div className="col-xs-12">
                            <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;