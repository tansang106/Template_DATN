import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchDrinkRequest } from '../../Actions/index';
import Cart from './Cart';
import DrinkCartContainer from '../../Containers/DrinkCartContainer';
import CartContainer from '../../Containers/CartContainer';
import moment from 'moment';
class Invoice extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            txtName: '',
            txtPhone: '',
            txtAddress: '', 
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    

    componentDidMount() {
        this.props.fetchAllDrink();
    }

    render() {
        var { drinks } = this.props;
        var { txtName, txtPhone, txtAddress } = this.state
        console.log('drinks render', drinks)
        let drink = drinks.map((drink, index) => {
            return (
                <tr>
                    <td>
                        <span className="round">
                            <i className="ti-shopping-cart"></i>
                        </span>
                    </td>
                    <td>
                        <h6>
                            <a className="link">{drink.drink_name}</a>
                        </h6>
                        <small className="text-muted">Price : {drink.drink_price} </small>
                    </td>
                   {/* <td>
                        <h5>357</h5>
                    </td> */}
                    <td>
                        <h5>{drink.drink_price}</h5>
                    </td> 
                    <td>
                        <span className="round" onClick={this.onClickItem}>
                            <i className="ti-shopping-cart"></i>
                        </span>
                    </td>
                </tr>
            )
        })
        return (
            <div className="row">
                <div className="col-md-6">
                    {/* Table Info */}
                    <div className="card earning-widget">
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
                            <h4 className="card-title m-b-0">Info</h4>
                        </div>

                        <div className="card-body">
                            <h4 className="card-title">Animated Line Inputs Form With Floating Labels</h4>
                            <form className="floating-labels m-t-40">
                                <div className="form-group has-success m-b-40">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="input11" 
                                        name="txtName"
                                        value={txtName}
                                        onChange={this.onChange}
                                    />
                                    <span className="bar"></span>
                                    <label for="input11">Name</label>
                                </div>
                                <div className="form-group has-warning m-b-40">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="input11" 
                                        name="txtPhone"
                                        value={txtPhone}
                                        onChange={this.onChange}/>
                                    <span className="bar"></span>
                                    <label for="input11">Phone</label>
                                </div>
                                <div className="form-group has-error has-danger m-b-40">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="input12" 
                                        name="txtAddress"
                                        value={txtAddress}
                                        onChange={this.onChange}
                                    />
                                    <span className="bar"></span>
                                    <label for="input12">Address</label>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* End Table Info */}

                    {/* Table Product */}
                    <div className="card earning-widget">
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
                            <h4 className="card-title m-b-0">Product</h4>
                        </div>
                        <div className="card-body">
                            <select className="custom-select pull-right">
                                <option selected="">Electronics</option>
                                <option value="1">Kitchen</option>
                                <option value="2">Crocory</option>
                                <option value="3">Wooden</option>
                            </select>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="exampleInputuname2" placeholder="VAT" />
                                        <div className="input-group-addon">
                                            <i className="fa fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="exampleInputuname2" placeholder="Discount" />
                                        <div className="input-group-addon">
                                            <i className="fa fa-percent"></i>
                                        </div>
                                    </div>
                                </div>
                                {/*/span*/}
                            </div>
                                <DrinkCartContainer />
                        </div>


                    </div>
                    {/* End Table Product */}
                </div>
                {/* End Table Info & Product */}
                {/* Table Invoice */}
                <div className="col-md-6">
                    <div className="card card-body printableArea">
                        <h3>
                            <b>INVOICE</b>
                            <span className="pull-right">#5669626</span>
                        </h3>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pull-left">
                                    <address>
                                        <h3> &nbsp;
                                                <b className="text-danger">Material Pro Admin</b>
                                        </h3>
                                        <p className="text-muted m-l-5">E 104, Dharti-2,
                                                <br /> Nr' Viswakarma Temple,
                                                <br /> Talaja Road,
                                                <br /> Bhavnagar - 364002</p>
                                    </address>
                                </div>
                                <div className="pull-right text-right">
                                    <address>
                                        <h3>To,</h3>
                                        {/* <h4 className="font-bold">Gaala & Sons,</h4> */}
                                        <h4 className="font-bold">{txtName},</h4>
                                        {/* <p className="text-muted m-l-30">E 104, Dharti-2,
                                                <br /> Nr' Viswakarma Temple,
                                                <br /> Talaja Road,
                                                <br /> Bhavnagar - 364002</p> */}
                                         <p className="text-muted m-l-30">{txtAddress}</p>
                                        <p className="m-t-30">
                                            <b>Phone :</b>
                                            <i className="fa fa-phone"></i> {txtPhone}</p>
                                        <p>
                                            <b>Invoice Date :</b>
                                            <i className="fa fa-calendar"></i> {moment().format('LLL')}</p>
                                    </address>
                                </div>
                            </div>
                                <CartContainer/>
                        </div>
                    </div>
                </div>
                {/* End Table Invoice */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //users: state.users,
        //systems: state.systems,
        drinks: state.drinks,
      
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
      
        fetchAllDrink: () => {
            dispatch(actFetchDrinkRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);