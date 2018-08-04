import React, { Component } from 'react';
import {Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import callApi from '../../Utils/apiCaller';
import { actFetchLogin } from '../../Actions/index';
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            userData: [],
            dataLogin: [],
            login: false,
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

    onChangeUser(value){
        this.setState({ txtUsername: value})
        console.log(value)
    }

    onChangePass(value){
        this.setState({ txtPassword: value})
        console.log(value)
    }

    onLogin = (e) => {
        e.preventDefault(); 
        console.log(e)
        console.log(this.state.txtUsername)
        console.log(this.state.txtPassword);
        // axios({
        //     method: 'POST',
        //     url: 'http://108.160.130.103/users/login',
        //     data: {
        //         user_password: this.state.txtPassword,
        //         user_email: this.state.txtUsername
        //     }
        // }).then(res => {
        //     console.log(res)
        //     if (res.status === 200){
        //         toastr.info('Are you the 6 fingered man?')
        //         console.log('logined')
        //         return <Redirect to={{
        //             pathname: '/coffeegrid',
        //         }}/>
        //     }
        // }).catch(err => {
        //     console.log(err);
            
        // })

        //=======================Backup
        callApi('users/login', 'POST', { 
            user_password: this.state.txtPassword,
            user_email: this.state.txtUsername}).then(res => {
                console.log(res)
                if (res.data.status === 'success'){
                    this.setState({ userData : res.data})
                    toastr.success('Login Success', 'SUCCESS')
                    console.log('user data', this.state.userData)
                    localStorage.setItem("tokenUser",JSON.stringify({
                        token: this.state.userData.token
                    }));
                    localStorage.setItem("dataUser", JSON.stringify({
                        data: this.state.userData.user
                    }));
                    // <Redirect to= '/'/>
                    // return <Redirect to={{
                    //     pathname: '/',
                    // }}/>
                    // console.log('trc redirect')
                    this.setState({login: true})
                    // return ( <Redirect to='/home' /> )
                    // console.log('sau redirec')
                    this.props.updated
                    console.log(this.props)
                }
                else {
                    toastr.error('Login Fail', 'ERROR')
                }
            })
        //==========================End Backup
        // callApi('users/login', 'POST', {
        //     user_password: this.state.txtPassword,
        //     user_email: this.state.txtUsername
        // }).then(res => {
        //     console.log('res data', res.data)
        //     this.props.fetchdataLogin(res.data);
        // })

        // var { txtUsername, txtPassword} = this.state;
        // if (txtUsername === 'admin' && txtPassword === 'admin') {
        //     localStorage.setItem("user",JSON.stringify({
        //         username: txtUsername,
        //         password: txtPassword
        //     }));
        // }
    }

    reload = () => {
        return <Redirect to="/home" />
    }
    render() {
        // if (localStorage.DATA_USER != null) {
        //     return <Redirect to='/home' />
        // }
        // Gọi API Login
        if (this.state.login == true) {
            // var { location } = this.props;
            // return <Redirect to={
            //     {
            //         pathname: '/home',
            //         state: {
            //             from: location
            //         }
            //     }
            // } />
            // return <Redirect to="/home"/>
            // this.reload();
            <Redirect to="/home" />
        // setTimeout( this.reload(), 100)
        }
        // let { userData } = this.state

        var { dataLogin } = this.props
        setTimeout(console.log('Props dataLogin', dataLogin), 2000)
        

        // var { txtUsername, txtPassword } = this.state;
        // var loggedInUser = localStorage.getItem('user');
        // if(loggedInUser !== null){
        //     var {location} = this.props;
        //     return <Redirect to={{
        //         pathname: '/coffeegrid',
        //         state: {
        //             from: location
        //         }
        //     }}/>
        // }

        // if(userData.token){
        //     return <Redirect to="/"/>
        // }
        return (
            <React.Fragment>
            {/* ============================================================== */}
            {/* Preloader - style you can find in spinners.css */}
            {/* ============================================================== */}
            <div class="preloader">
                <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
            </div>
            {/* ============================================================== */}
            {/* Main wrapper - style you can find in pages.scss */}
            {/* ============================================================== */}
            <section id="wrapper">
                <div class="login-register login_background">        
                    <div class="login-box card">
                    <div class="card-body">
                        <form class="form-horizontal form-material" id="loginform" action="index.html" onSubmit={this.onLogin}>
                            <h3 class="box-title m-b-20">Sign In</h3>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input 
                                        class="form-control" 
                                        type="text" 
                                        required="" 
                                        placeholder="Username"
                                        value={this.state.txtUsername}
                                        onChange={e => this.onChangeUser(e.target.value)}
                                        /> </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <input 
                                        class="form-control" 
                                        ref='txtPassword' 
                                        type="password" 
                                        required="" 
                                        placeholder="Password"
                                        value={this.state.txtPassword}
                                        onChange={e => this.onChangePass(e.target.value)}/> </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <div class="checkbox checkbox-primary pull-left p-t-0">
                                        <input id="checkbox-signup" type="checkbox"/>
                                        <label for="checkbox-signup"> Remember me </label>
                                    </div> <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right"><i class="fa fa-lock m-r-5"></i> Forgot pwd?</a> </div>
                            </div>
                            <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button 
                                        class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" 
                                        type="submit"
                                        // onClick = {e => this.onLogin()}
                                        >Log In</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                    <div class="social">
                                        <a href="javascript:void(0)" class="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fa fa-facebook"></i> </a>
                                        <a href="javascript:void(0)" class="btn btn-googleplus" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" class="fa fa-google-plus"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group m-b-0">
                                <div class="col-sm-12 text-center">
                                    <p>Don't have an account? <a href="register.html" class="text-info m-l-5"><b>Sign Up</b></a></p>
                                </div>
                            </div>
                        </form>
                        <form class="form-horizontal" id="recoverform" action="index.html">
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <h3>Recover Password</h3>
                                    <p class="text-muted">Enter your Email and instructions will be sent to you! </p>
                                </div>
                            </div>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input class="form-control" type="text" required="" placeholder="Email"/> </div>
                            </div>
                            <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                  </div>
                </div>
                
            </section>
            {/* ============================================================== */}
            {/* End Wrapper */}

            </React.Fragment>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        dataLogin : state.login
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchdataLogin: (dataLogin) => {
            dispatch(actFetchLogin(dataLogin));
        }
    }
}

export default connect(mapStateToProps, null)(Login);