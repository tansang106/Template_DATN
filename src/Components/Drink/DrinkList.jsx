import React, { Component } from 'react';
import DrinkItem from './DrinkItem';


// import $ from 'jquery';

class Drink extends Component {
 
    render() {
        var { children } = this.props;
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Drink List</h4>
                            {/* <h6 className="card-subtitle"></h6> */}
                            <div className="table-responsive">
                                <table id="demo-foo-addrow" className="table m-t-30 table-hover contact-list" data-page-size="10">
                                    <thead>
                                        <tr>
                                            <th className="text_center">No</th>
                                            <th className="text_center">Name</th>
                                            {/* <th>Email</th> */}
                                            <th className="text_center">Price</th>

                                            <th className="text_center">Action</th>
                                        </tr>
                                    </thead>
                                    {/* BossItem */}

                                    <DrinkItem></DrinkItem>
                                    {/* { children } */}

                                    {/* End CoffeeShopItem */}

                                    {/* Drink Footer */}


                                    {/* End Drink Footer */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Drink;