import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actFetchShopRequest, actAddShopResquest, actFetchSystemRequest, actUpdateShopResquest, actFetchAccountRequest, actAddUserResquest, actUpdateUserResquest } from '../../Actions/index';
import moment from 'moment';
import $ from 'jquery'; 
import callApi from '../../Utils/apiCaller';
import * as Config from '../../Constants/Config';
import * as dataStorage from '../../Constants/localStorage';
//xem lai phan refs dang loi

class BossItem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            shops: [],
            idUser : '',
            txtUserName : '',
            txtUserAddress : '',
            txtUserAvatar : '',
            txtUserBirthday : '',
            txtUserSexual : '',
            txtUserPhone : '',
            txtUserSystemID : '',
            txtUserEmail: '',
            txtUserPassword: '',
            txtUserIDCard: '',
            avatarUpload: '',
            txtAvatarUpload: '',
        }
    }
  
    onChangeImage = (e) => {
        this.setState({
            txtUserAvatar: e.target.files[0]
        })
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
    onGetIdUser = (ev) => {
        let { users, systems } = this.props
        // console.log(ev)
        var val = ev.target.dataset.value;
        // console.log(systems);
        // console.log(users[0])
        let dataUser = this.findObjectByKey(users, 'user_id', val);
        let dataSystem = this.findObjectByKey(systems, 'system_id', 1);
        // console.log('systemdata', dataSystem.system_name)
        // console.log('log', dataUser.user_name)
        console.log('lấy avatar', dataUser.user_avatar)
        this.setState({
            txtUserAddress: dataUser.user_address,
            //txtUserAvatar: dataUser.user_avatar,
            txtUserBirthday: moment(dataUser.user_birthday).format('YYYY-MM-DD'),
            txtUserSexual: dataUser.user_sex,
            txtUserEmail: dataUser.user_email,
            txtUserName: dataUser.user_name,
            txtUserPhone: dataUser.user_phone,
            txtUserSystemID: dataUser.user_shop_id,
            idUser: dataUser.user_id,
            txtUserIDCard: dataUser.user_Idcard,
            txtAvatarUpload: dataUser.user_avatar,
        })
        console.log(dataUser);
    }

    uploadFile = async () => {
        console.log('vào upload file')
        var formData = new FormData();
        formData.append("avatar", this.state.txtUserAvatar);
        let avatar = await callApi('shop/upload-imgBoss', 'POST', formData, {
            'token': dataStorage.TOKEN
        }).then(res => {
            return res.data.imgBoss;
        })
        this.setState({ avatarUpload: avatar})
        console.log('đã up ảnh', this.state.avatarUpload)
        // this.setState({ avatarUpload: `${Config.API_URL}/uploads/imgDrink/${avatar}`})
    }


    onSave = async (e) => {
        try {
            console.log('click save')
            e.preventDefault();
            var { txtUserAddress, txtUserPassword, txtUserAvatar, txtUserBirthday, txtUserSexual, txtUserEmail, txtUserName, txtUserPhone, txtUserSystemID, txtUserIDCard } = this.state;
            console.log('data', txtUserAddress, txtUserPassword, txtUserBirthday, txtUserEmail, txtUserName, txtUserPhone, txtUserIDCard )
            await this.uploadFile();
            //data này trùng với body call tới api
    
            var user = {
                boss_name: txtUserName,
                // boss_system: (this.refs.idSystem) ? this.refs.idSystem.value : '',
                boss_address: txtUserAddress,
                boss_phone: txtUserPhone,
                // boss_avatar: txtUserAvatar,
                boss_avatar: this.state.avatarUpload,
                boss_email: txtUserEmail,
                boss_birthday: txtUserBirthday,
               
                boss_active: 'on',
                boss_Idcard: txtUserIDCard,
                //boss_id: this.state.idUser
               
                
            }
            if (this.state.idUser) {
                user.boss_id = this.state.idUser
                user.boss_shop= (this.refs.idSystem) ? this.refs.idSystem.value : '',
                console.log('đang kiểm tra tồn tại id', this.state.idUser)
                this.props.onUpdateUser(user);
                console.log('đã update')
            }
            else {
                console.log('đã k có id')
                user.boss_password = txtUserPassword;
                user.boss_sex = (this.refs.idSex) ? this.refs.idSex.value : '',
                user.boss_shop_id = (this.refs.idSystem) ? this.refs.idSystem.value : '',
                console.log('log system id', user.boss_shop_id)
             
                this.props.onAddUser(user);
                console.log(user)
    
            }
                // callApi('shops/create', 'POST', {
                //     shop_name: txtShopName,
                //     shop_system_id: txtShopSystemID,
                //     shop_address: txtShopAddress,
                //     shop_phone: txtShopPhone,
                //     shop_avatar: txtShopAvatar,
                //     shop_email: txtShopEmail,
                //     shop_dayFrom: txtShopDayFrom,
                //     shop_dayTo: txtShopDayTo
                // }, {
                //     'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjJAZ21haWwuY29tIiwiaWF0IjoxNTI2Njk2Njc5fQ.mMmoD11AmjiyARIWufhJDl3LifDAf8LqSAzKEzeV7bE"    
                // }).then(res => {
                //     console.log(res);
                // })
        } catch (error) {
            console.log('Error onSave', error)
        }
       
    }

    onDelete = (e) => {
        try {
            console.log('click save')
            e.preventDefault();
            var { txtUserAddress, txtUserPassword, txtUserAvatar, txtUserBirthday, txtUserSexual, txtUserEmail, txtUserName, txtUserPhone, txtUserSystemID, txtUserIDCard, txtAvatarUpload } = this.state;
            console.log('xem avatar', this.refs.refAvatar.value)
            console.log('data', txtUserAddress, txtUserPassword, txtUserBirthday, txtUserEmail, txtUserName, txtUserPhone, txtUserIDCard, txtAvatarUpload )
            var user = {
                boss_name: txtUserName,
                boss_system: (this.refs.idSystem) ? this.refs.idSystem.value : '',
                boss_address: txtUserAddress,
                boss_phone: txtUserPhone,
                boss_avatar: txtAvatarUpload,
                boss_email: txtUserEmail,
                boss_birthday: txtUserBirthday,
                boss_active: 'off',
                boss_Idcard: txtUserIDCard,
                boss_id: this.state.idUser
            
            }
            console.log('đang kiểm tra tồn tại id', user)
            this.props.onUpdateUser(user);
            console.log('đã update')
        } catch (error) {
            console.log('Error onSave', error)
        }
       
    }

    onSetState = () => {
        this.setState({
            idUser: '',
            txtUserName: '',
            txtUserAddress: '',
            txtUserAvatar: '',
            txtUserBirthday: '',
            txtUserSexual: '',
            txtUserPhone: '',
            txtUserSystemID: '',
            txtUserEmail: '',
            txtUserPassword: '',
            txtUserIDCard: ''
        })
    }
    

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchAllSystem();
        
       
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

    showBoss = (users, systems) => {
        var result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                if (user.user_active == 'on') {
                    let nameSystems = systems.find(x => x.system_id === user.user_shop_id)
            let nameSystem;
            if (nameSystems != undefined) {
                nameSystem = nameSystems.system_name
                
                // if (dataStorage.DATA_USER.user_user_id == user.user_system_id)
                // {
                return (
                    <tr className="text_center" key={index}>
                        <td>{index + 1}</td>
                        <td className="text_left">
                            <a >
                                <img src={`${Config.API_URL}/uploads/imgBoss/${user.user_avatar}`} alt="user" width="40" className="img-circle"
                                /> {user.user_name}</a>
                                {/* <img src={user.user_avatar} alt="user" width="40" className="img-circle"
                                /> {user.user_name}</a> */}
                        </td>
                        {/* <td>genelia@gmail.com</td> */}
                        <td>{user.user_sex}</td>
                        <td>{user.user_phone}</td>
                        <td>{nameSystem}</td>
                        <td>{user.user_active}</td>
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
                                    data-target="#update-user"
                                    data-value={user.user_id}
                                    onClick={this.onGetIdUser}
                                >Add</button>
                               <button 
                                    type="button" 
                                    className="btn-sm waves-effect waves-light btn-danger"
                                    data-toggle="modal" 
                                    data-target="#delete-modal"
                                    data-value={user.user_id}
                                    onClick={this.onGetIdUser}
                                >Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            }
                }
            })
        }
        return result;
    }

    render() {
        var { users, systems } = this.props
        
        console.log(this.props)
        console.log(users)
        var { txtUserAddress, txtUserAvatar, txtUserBirthday, txtUserPassword, txtUserEmail, txtUserName, txtUserPhone, txtUserSystemID, txtUserIDCard } = this.state;
        return (
            <React.Fragment>
                <tbody>
                    {this.showBoss( users, systems)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-user" onClick={this.onSetState}>Add New User</button>
                        </td>
                        {/* Modal Add */}
                        <div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="add-user">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Boss</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="row">
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h4 class="card-title text_center">Avatar</h4>
                                                        {/* <label for="input-file-max-fs">Upload Avatar</label> */}
                                                        {/* <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            class="dropify"
                                                            data-max-file-size="2M"
                                                            name="txtUserAvatar"
                                                            value={txtUserAvatar}
                                                            onChange={this.onChange} 
                                                        /> */}
                                                        <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            class="dropify"
                                                            data-max-file-size="2M"
                                                            onChange={this.onChangeImage}
                                                        />
                                                    </div>
                                                </div>
                                                <form class="floating-labels m-t-40">

                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtUserBirthday"
                                                            value={txtUserBirthday}
                                                            onChange={this.onChange} 
                                                        />
                                                    </div>

                                                </form>
                                            </div>
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form class="floating-labels m-t-40">
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserEmail"
                                                            value={txtUserEmail}
                                                            onChange={this.onChange} 
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">User Email</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="password"
                                                            class="form-control"
                                                            id="input2"
                                                            name="txtUserPassword"
                                                            value={txtUserPassword}
                                                            onChange={this.onChange} 
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input2">Password</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserName"
                                                            value={txtUserName}
                                                            onChange={this.onChange} />
                                                        <span class="bar"></span>
                                                        <label for="input1">User Name</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserAddress"
                                                            value={txtUserAddress}
                                                            onChange={this.onChange} 
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">Address</label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form class="floating-labels m-t-40">
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserPhone"
                                                            value={txtUserPhone}
                                                            onChange={this.onChange} 
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">Phone</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserIDCard"
                                                            value={txtUserIDCard}
                                                            onChange={this.onChange} 
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">ID</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <select
                                                            class="form-control custom-select"
                                                            data-placeholder="Sexual"
                                                            ref='idSystem'>
                                                            {this.props.systems.map((system, index) => {
                                                            return (
                                                                <option
                                                                    name="txtShopSystemID"
                                                                    value={system.system_id}
                                                                    key={index}>
                                                                    {system.system_name}
                                                                </option>
                                                            )
                                                            })}
                                                            {/* <option value="Category 1">Sexual</option>
                                                            <option value="Category 2">Category 2</option>
                                                            <option value="Category 3">Category 5</option>
                                                            <option value="Category 4">Category 4</option> */}
                                                        </select>
                                                    </div>

                                                    <div class="form-group m-b-40">
                                                        <select
                                                            class="form-control custom-select"
                                                            data-placeholder="Sexual"
                                                            ref='idSex'>
                                                            {/* {this.props.systems.map((system, index) => {
                                                            return (
                                                                <option
                                                                    name="txtShopSystemID"
                                                                    value={system.system_id}
                                                                    key={index}>
                                                                    {system.system_name}
                                                                </option>
                                                            )
                                                        })} */}
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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
                        <div className="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ display: "none" }} id="update-user">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myLargeModalLabel">Add Boss</h4>
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="row">
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h4 class="card-title text_center">Avatar</h4>
                                                        {/* <label for="input-file-max-fs">Upload Avatar</label> */}
                                                        <input
                                                            type="file"
                                                            id="input-file-max-fs"
                                                            class="dropify"
                                                            data-max-file-size="2M"
                                                            onChange={this.onChangeImage}
                                                        />
                                                    </div>
                                                </div>
                                                <form class="floating-labels m-t-40">

                                                    <div className="col-md-12 m-b-20">
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Date Expire"
                                                            name="txtUserBirthday"
                                                            value={txtUserBirthday}
                                                            onChange={this.onChange}
                                                        />
                                                    </div>

                                                </form>
                                            </div>
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form class="floating-labels m-t-40">
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserEmail"
                                                            value={txtUserEmail}
                                                            onChange={this.onChange}
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">User Email</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserName"
                                                            value={txtUserName}
                                                            onChange={this.onChange} />
                                                        <span class="bar"></span>
                                                        <label for="input1">User Name</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserAddress"
                                                            value={txtUserAddress}
                                                            onChange={this.onChange}
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">Address</label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                                <form class="floating-labels m-t-40">
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserPhone"
                                                            value={txtUserPhone}
                                                            onChange={this.onChange}
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">Phone</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="input1"
                                                            name="txtUserIDCard"
                                                            value={txtUserIDCard}
                                                            onChange={this.onChange}
                                                        />
                                                        <span class="bar"></span>
                                                        <label for="input1">ID</label>
                                                    </div>
                                                    <div class="form-group m-b-40">
                                                        <select
                                                            class="form-control custom-select"
                                                            data-placeholder="Sexual"
                                                            ref='idSystem'>
                                                            {this.props.systems.map((system, index) => {
                                                                return (
                                                                    <option
                                                                        name="txtShopSystemID"
                                                                        value={system.system_id}
                                                                        key={index}>
                                                                        {system.system_name}
                                                                    </option>
                                                                )
                                                            })}
                                                            {/* <option value="Category 1">Sexual</option>
                                                            <option value="Category 2">Category 2</option>
                                                            <option value="Category 3">Category 5</option>
                                                            <option value="Category 4">Category 4</option> */}
                                                        </select>
                                                    </div>

                                                   
                                                </form>
                                            </div>
                                        </div>
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

                        {/* Modal Delete */}
                        <div id="delete-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: "none"}}>
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">  
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                <h4 class="modal-title">Delete</h4>
                                            </div>
                                            <div class="modal-body">
                                                <h1 className= "text-danger"> 
                                                    Are you sure delete?
                                                </h1>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
                                                <button 
                                                    type="button" 
                                                    class="btn btn-danger waves-effect waves-light" 
                                                    onClick={this.onDelete}
                                                    data-dismiss="modal">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                        {/* End Modal Delete */}
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
        shops: state.shops,
        users: state.users,
        systems: state.systems,
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllShops : () => {
            dispatch(actFetchShopRequest());
        },
        onAddShop: (shop) => {
            dispatch(actAddShopResquest(shop));
        },
        fetchAllSystem : (system) => {
            dispatch(actFetchSystemRequest(system))
        },
        onUpdateShop: (shop) => {
            dispatch(actUpdateShopResquest(shop));
        },
        fetchAllUsers : (user) => {
            dispatch(actFetchAccountRequest(user))
        },
        onAddUser: (user) => {
            dispatch(actAddUserResquest(user))
        },
        onUpdateUser: (user) => {
            dispatch(actUpdateUserResquest(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BossItem);