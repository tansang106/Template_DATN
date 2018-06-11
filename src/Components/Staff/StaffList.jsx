import React, { Component } from 'react';
import StaffItem from './StaffItem';


// import $ from 'jquery';

class Staff extends Component {
 
    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Staff List</h4>
                            {/* <h6 className="card-subtitle"></h6> */}
                            <div className="table-responsive">
                                <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list" data-page-size="10">
                                    <thead>
                                        <tr>
                                            <th className="text_center">No</th>
                                            <th className="text_center">Name</th>
                                            {/* <th>Email</th> */}
                                            <th className="text_center">Sexual</th>
                                            <th className="text_center">Phone</th>
                                            <th className="text_center">Position</th>
                                            <th className="text_center">Status</th>

                                            <th className="text_center">Action</th>
                                        </tr>
                                    </thead>
                                    {/* BossItem */}

                                    <StaffItem></StaffItem>

                                    {/* End CoffeeShopItem */}

                                    {/* Staff Footer */}


                                    {/* End Staff Footer */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Staff;