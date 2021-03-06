import React, { Component } from 'react';
import CoffeeShopItem from './CoffeeShopItem';
import CoffeeShopFooter from './CoffeeShopFooter';
import EmployeeFooter from '../Employee/EmployeeFooter';

// import $ from 'jquery';

class CoffeeShop extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Coffee Shop list</h4>
                        {/* <h6 className="card-subtitle"></h6> */}
                        <div className="table-responsive">
                            <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list" data-page-size="10">
                                <thead>
                                    <tr>
                                        <th className="text_center">No</th>
                                        <th className="text_center">Name</th>
                                        {/* <th>Email</th> */}
                                        <th className="text_center">Phone</th>
                                        <th className="text_center">Joining Date</th>
                                        <th className="text_center">End Date</th>
                                        <th className="text_center">System</th>
                                        <th className="text_center">Action</th>
                                    </tr>
                                </thead>
                                {/* CoffeeShopItem */}

                                <CoffeeShopItem></CoffeeShopItem>

                                {/* End CoffeeShopItem */}

                                {/* CoffeeShop Footer */}

                                <tfoot>
                <tr>
                <td colSpan="2">
                    <button type="button" className="btn btn-info btn-rounded" data-toggle="modal" data-target="#add-contact">Add New Contact</button>
                </td>
                <div id="add-contact" className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 className="modal-title" id="myModalLabel">Add New Coffee Shop</h4>
                            </div>
                            <div className="modal-body">
                                <from className="form-horizontal form-material">
                                    <div className="form-group">
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" placeholder="Type name" /> </div>
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" placeholder="Email" /> </div>
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" placeholder="Phone" /> </div>
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" placeholder="Designation" /> </div>
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" placeholder="Age" /> </div>
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" placeholder="Date of joining" /> </div>
                                        <div className="col-md-12 m-b-20">
                                            <input type="text" className="form-control" placeholder="Salary" /> </div>
                                        <div className="col-md-12 m-b-20">
                                            <div className="fileupload btn btn-danger btn-rounded waves-effect waves-light">
                                                <span>
                                                    <i className="ion-upload m-r-5"></i>Upload Contact Image</span>
                                                <input type="file" className="upload" /> </div>
                                        </div>
                                    </div>
                                </from>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info waves-effect" data-dismiss="modal">Save</button>
                                <button type="button" className="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                        {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}
                </div>
                    <td colSpan="7">
                        <div className="text-right">
                            <ul className="pagination"> </ul>
                        </div>
                    </td>
                </tr>
            </tfoot>

                                {/* End CoffeeShop Footer */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default CoffeeShop;