import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    createBill,
    clearCart
} from '../../Actions/index';
import * as dataStorage from '../../Constants/localStorage';
import callApi from '../../Utils/apiCaller';

class CartResult extends Component {

    showTotalAmout = (cart) => {
        console.log('cart ở result', cart)
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++){
                total += cart[i].product.drink_price * cart[i].quantity;
            }
        }
        return total;
    }

    onPay = (cart) => {
        console.log('cart', cart)
        // let user_id = dataStorage.DATA_USER.user_id
        let total = this.showTotalAmout(cart);
        // console.log('total', total, user_id)
        let array = [
            {
                "Date": "01/12",
                "Data": 225000,
                "Count": 2
            },
            {
                "Date": "06/12",
                "Data": 33000,
                "Count": 1
            }
        ]
        let date = [];
        let data = [];
        let count = [];
        for (let j = 0; j < array.length; j++){
            console.log(array[j])
            date.push(array[j].Date);
            data.push(array[j].Data);
            count.push(array[j].Count)
            // data.push(array[j].Count)
        }
        console.log(date, data, count)
        console.log('log', array)
        return;
        //Test
        //=====================
        let bill = {
            bill_user_id: dataStorage.DATA_USER.user_id,
            bill_total: total,
        }
        callApi('bills/create', 'POST', bill, {
            'token': dataStorage.TOKEN
        }).then(res => {
            console.log('res', res);
            let bill_id = res.data.bill.bill_id;
            // let detail_bill = {
            //     detail_bill_id: res.data.bill.bill_id,
            //     detail_drink_id: 
            // }
            let i = 0;
            let length = cart.length;
            for (i; i < length; i++){
                let product = cart[i].product;
                let quantity = cart[i].quantity;
                let total = quantity * product.drink_price;
                let detail_bill = {
                    detail_bill_id: bill_id,
                    detail_drink_id: product.drink_id,
                    detail_drink_name: product.drink_name,
                    detail_number: quantity,
                    detail_price: product.drink_price,
                    detail_toalMoney_drink: total
                }
                callApi('detail-bill/create', 'POST', detail_bill, {
                    'token': dataStorage.TOKEN
                }).then(res => {
                    console.log(res);
                })
            }
            // localStorage.removeItem('CART')
            this.props.removeCart();
        })
    }
    



    render() {
        var { cart } = this.props;
        return <React.Fragment>
            <div className="pull-right m-t-30 text-right">
                    <p>Sub - Total amount: $13,8488</p>
                    <p>vat (10%) : $138 </p>
                    <hr />
                    <h3>
                    <b>Total :</b> ${ this.showTotalAmout(cart)}
                    </h3>
                </div>
                <div className="clearfix" />
                <hr />
                <div className="text-right">
                <button
                    className="btn btn-danger"
                    type="submit"
                    onClick={ () => this.onPay(cart)}
                >
                    {" "}
                    Proceed to payment{" "}
                    </button>
                    <button id="print" className="btn btn-default btn-outline" type="button">
                    <span>
                        <i className="fa fa-print" /> Print
                    </span>
                    </button>
                </div>
        </React.Fragment>;
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createBill: (bill) => {
            dispatch(createBill(bill));
        },
        removeCart: () => {
            dispatch(clearCart());
        }
    }
}

export default connect(null, mapDispatchToProps)(CartResult);