import React, { Component } from 'react';
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
                    <button className="btn btn-danger" type="submit">
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



export default CartResult;