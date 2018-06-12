import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    actFetchShopRequest,
    actAddShopResquest,
    actFetchSystemRequest,
    actUpdateShopResquest,
    actFetchAccountRequest,
    actAddDrinkResquest,
    actUpdateDrinkResquest,
    actFetchDrinkRequest,
    actFetchPositionRequest
} from '../../Actions/index';
import moment from 'moment';
import $ from 'jquery';
import * as dataStorage from '../../Constants/localStorage';
// dataStorage.DATA_USER.user_shop_id
//xem lai phan refs dang loi

class DrinkItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            idDrink: '',
            txtDrinkName: '',
            txtDrinkPrice: '',
            txtDrinkAvatar: '',
       
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
    findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                return array[i];
            }
        }
        return null;
    }

    findElementInObjectOfArray(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
    }

    //Nút sửa - Nhấn vào lấy đc thông tin boss
    onGetIdDrink = (ev) => {
        let { drinks, positions } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(systems);
        // console.log(users[0])
        let dataDrink = this.findObjectByKey(drinks, 'drink_id', val);
        let dataPosition = this.findObjectByKey(positions, 'position_id', 1);
        // console.log('systemdata', dataSystem.system_name)
        // console.log('log', dataDrink.drink_name)
        console.log('lấy avatar', dataDrink.drink_avatar)
        this.setState({
            txtDrinkPrice: dataDrink.drink_price,
            //txtDrinkAvatar: dataDrink.drink_avatar,
            txtDrinkName: dataDrink.drink_name,
            idDrink: dataDrink.drink_id
           
        })
        console.log(dataDrink);
    }


    onSave = (e) => {
        console.log('click save')
        e.preventDefault();
        var { txtDrinkPrice, txtDrinkAvatar, txtDrinkName, idDrink } = this.state;
        console.log('xem avatar', this.refs.refAvatar.value)
        console.log('data trước khi save', txtDrinkPrice, txtDrinkName, idDrink)

        //data này trùng với body call tới api
        
        var drink = {
            drink_name: txtDrinkName,
            drink_price: txtDrinkPrice,
         
            // drink_avatar: txtDrinkAvatar,
            drink_avatar: '5c87d951-48c2-4cbd-bc56-9006db03386a.jpg',

           // drink_position_id: (this.refs.idPosition) ? this.refs.idPosition.value : '',
        }
        if (idDrink) {
            drink.drink_id = idDrink

            console.log('đang kiểm tra tồn tại id', idDrink)
            this.props.onUpdateDrink(drink)
            console.log('đã update')
        }
        else {
            console.log('đã k có id')
            drink.drink_shop_id = dataStorage.DATA_USER.user_shop_id,
            this.props.onAddDrink(drink);
            console.log(drink)

        }
    }

    onSetState = () => {
        this.setState({
            idDrink: '',
            txtDrinkName: '',
            txtDrinkPrice: '',
            txtDrinkAvatar: '',
        })
    }



    componentDidMount() {
        console.log('vào did mount')
        // this.props.fetchAllDrinks();
        // this.props.fetchAllSystem();
        this.props.fetchAllDrink();
        this.props.fetchPosition();

    }

    onTest = () => {
        // console.log('vào test')
        // var shop = {
        //     shop_name: "HardTest",
        //     shop_system: "1",
        //     shop_address: "HCM",
        //     shop_phone: "0985545458",
        //     shop_avatar: 'image.png',
        //     shop_email: "056565658656",
        //     shop_dayFrom: "01/01/2018",
        //     shop_dayTo: "01/01/2019",
        // }
        // console.log('log props', this.props)
        // this.props.onAddShop(shop);
        // console.log('chạy add xong')

    }

    pagination = () => {
        // Pagination
        // -----------------------------------------------------------------
        $('#demo-foo-pagination').footable();
        $('#demo-show-entries').change(function (e) {
            e.preventDefault();
            var pageSize = $(this).val();
            $('#demo-foo-pagination').data('page-size', pageSize);
            $('#demo-foo-pagination').trigger('footable_initialized');
        });
    }

    render() {
        var { drinks, positions } = this.props

        console.log(this.props)
        console.log(drinks, positions)
        var { txtDrinkPrice, txtDrinkAvatar,   txtDrinkName} = this.state;
        //Biến shop dùng để đổ ra list shop
        var drink = drinks.map((drink, index) => {
            // var getNameSystem = this.findObjectByKey(systems, 'system_id', )
            if (drink != undefined) {



            // let nameSystems = positions.find(x => x.position_id === drink.user_position_id)
            // let nameSystem;
            // if (nameSystems != undefined) {
            //     nameSystem = nameSystems.position_name

                // if (dataStorage.DATA_USER.user_user_id == drink.user_system_id)
                // {
                return (
                    <tr className="text_center" key={index}>
                        <td>{index + 1}</td>
                        <td className="text_left">
                            <a >
                                <img src="../assets/images/users/4.jpg" alt="drink" width="40" className="img-circle"
                                /> {drink.drink_name}</a>
                            {/* <img src={drink.drink_avatar} alt="drink" width="40" className="img-circle"
                                /> {drink.drink_name}</a> */}
                        </td>
                        {/* <td>genelia@gmail.com</td> */}
                        <td>{drink.drink_price}</td>
                        {/* <td>{nameSystem}</td> */}
                        {/* <td></td> */}
                        <td>
                            {/* <button type="button" className="btn btn-lg btn-icon btn-pure btn-outline delete-row-btn" data-toggle="tooltip" data-original-title="Delete">
                                                {/* <i className="ti-close" aria-hidden="true"></i> 
                                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                            </button> */}
                            <div className="button-group text-center">
                                <button type="button" className="btn-sm waves-effect waves-light btn-info icon_action"
                                    onClick={this.onTest}>Info</button>
                                <button
                                    type="button"
                                    className="btn-sm waves-effect waves-light btn-primary icon_action"
                                    data-toggle="modal"
                                    data-target="#update-drink"
                                    data-value={drink.drink_id}
                                    onClick={this.onGetIdDrink}
                                >Add</button>
                                <button type="button" className="btn-sm waves-effect waves-light btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                )
                }
            // }
        })

        return (
            <React.Fragment>
                <tbody>
                    {drink}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-drink" onClick={this.onSetState}>Add New Drink</button>
                        </td>
                        {/* Modal Add */}
                        <div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="add-drink">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Drink</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <from className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h4 class="card-title text_center">Avatar</h4>
                                                            {/* <label for="input-file-max-fs">Upload Avatar</label> */}
                                                            {/* <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            class="dropify"
                                                            data-max-file-size="2M"
                                                            name="txtDrinkAvatar"
                                                            value={txtDrinkAvatar}
                                                            onChange={this.onChange} 
                                                        /> */}
                                                            <input
                                                                type="file"
                                                                id="input-file-max-fs"
                                                                class="dropify"
                                                                data-max-file-size="2M"
                                                                ref="refAvatar"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="input1"
                                                        name="txtDrinkName"
                                                        value={txtDrinkName}
                                                        onChange={this.onChange}
                                                    />
                                                    <span class="bar"></span>
                                                    <label for="input1">Drink Name</label>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="input1"
                                                        name="txtDrinkPrice"
                                                        value={txtDrinkPrice}
                                                        onChange={this.onChange}
                                                    />
                                                    <span class="bar"></span>
                                                    <label for="input1">Price</label>
                                                </div>
                                            </div>
                                        </from>
                                       
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal" onClick={this.onSave}>Save</button>
                                    </div>
                                </div>
                                {/* /.modal-content  */}
                            </div>
                            {/* /.modal-dialog  */}
                        </div>
                        {/* End Modal Add */}

                        {/* Modal Update */}
                        <div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="update-drink">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Drink</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <from className="form-horizontal form-material">
                                            <div className="form-group">
                                                <div className="col-md-12 m-b-20">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h4 class="card-title text_center">Avatar</h4>
                                                            {/* <label for="input-file-max-fs">Upload Avatar</label> */}
                                                            {/* <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            class="dropify"
                                                            data-max-file-size="2M"
                                                            name="txtDrinkAvatar"
                                                            value={txtDrinkAvatar}
                                                            onChange={this.onChange} 
                                                        /> */}
                                                            <input
                                                                type="file"
                                                                id="input-file-max-fs"
                                                                class="dropify"
                                                                data-max-file-size="2M"
                                                                ref="refAvatar"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="input1"
                                                        name="txtDrinkName"
                                                        value={txtDrinkName}
                                                        onChange={this.onChange}
                                                    />
                                                    <span class="bar"></span>
                                                    <label for="input1">Drink Name</label>
                                                </div>

                                                <div className="col-md-12 m-b-20">
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="input1"
                                                        name="txtDrinkPrice"
                                                        value={txtDrinkPrice}
                                                        onChange={this.onChange}
                                                    />
                                                    <span class="bar"></span>
                                                    <label for="input1">Price</label>
                                                </div>
                                            </div>
                                        </from>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal" onClick={this.onSave}>Save</button>
                                    </div>
                                </div>
                                {/* /.modal-content  */}
                            </div>
                            {/* /.modal-dialog  */}
                        </div>                         
                        {/* End Modal Update */}
                        {/* Pagination */}
                        <td colSpan="7">
                            <div className="text-right">
                                <ul className="pagination"> </ul>
                            </div>
                        </td>
                        {/* End Pagination*/}
                    </tr>
                </tfoot>
            </React.Fragment>


        )
    }
}

const mapStateToProps = state => {
    return {
        //users: state.users,
        //systems: state.systems,
        drinks: state.drinks,
        positions: state.positions
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllSystem: (system) => {
            dispatch(actFetchSystemRequest(system))
        },
        fetchAllDrinks: (drink) => {
            dispatch(actFetchAccountRequest(drink))
        },
        onAddDrink: (drink) => {
            dispatch(actAddDrinkResquest(drink))
        },
        onUpdateDrink: (drink) => {
            dispatch(actUpdateDrinkResquest(drink))
        },
        fetchAllDrink: () => {
            dispatch(actFetchDrinkRequest());
        },
        fetchPosition: () => {
            dispatch(actFetchPositionRequest());
        },
        onAddDrink: (drink) => {
            dispatch(actAddDrinkResquest(drink))
        },
        onUpdateDrink: (drink) => {
            dispatch(actUpdateDrinkResquest(drink))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkItem);