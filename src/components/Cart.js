import React,{useState,useEffect} from 'react';
import '../styles/Cart.css';

const Cart = () => {

    const [cartItems, setCartItems] = useState();
    const[status, setStatus] = useState("");
    const[modeOfPayment, setModeOfPayment] = useState("");

    useEffect(() => {

        fetch("http://localhost:8020/store/cart/view-cart-items")
            .then(data => data.json())
            .then(result => setCartItems(result))

    }, []);


    const deleteItemHandler = (productId) => {
        fetch("http://localhost:8083/store/cart/delete-by-productId/" + productId, {
            method: 'DELETE',
        })
            .then(console.log(productId+"Item deleted"))
    }

    const deleteAllItemsHandler = () => {
        fetch("http://localhost:8083/store/cart/delete-all-products/", {
            method: 'DELETE',
        })
            .then(console.log("Item deleted"))
    }

    const placeOrderHandler = () => {

        const order = {
            modeOfPayment 
        }

        fetch('http://localhost:8084/store/order/place-order', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        })
            .then(() => console.log("Order Placed"))
            .catch("Error")

        setStatus("Order Placed Successfully!")    

    }


    return(

        <React.Fragment>

            <h2>Cart Items</h2>

            <div className="cart-wrapper">
                {
                    cartItems &&
                    cartItems.productList.map(cartItem => (
                        <div className="cart-section" key={cartItem.product.productId}>
                            <div className="cart-img">
                                <img src={cartItem.product.image} alt="product info" />
                            </div>
                            <div className="cart-info">
                                <p>{cartItem.product.productName}</p>
                                <p><span>&#8377;</span>{cartItem.product.price}</p>
                                <p>
                                    Quantity
                                    <span className="decrease-quantity">-</span>
                                    {cartItem.quantity}
                                    <span className="increase-quantity">+</span>
                                </p>
                                <button
                                    className="remove-item-btn"
                                    value={cartItem.product.productId}
                                    onClick={e => deleteItemHandler(e.target.value)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                }

                <button
                    onClick={deleteAllItemsHandler}
                >Clear All</button>

                {cartItems && <p>Total : {cartItems.totalCost}</p>}

                <select
                    className="payment-selection"
                    onChange={e => setModeOfPayment(e.target.value)}
                    value={modeOfPayment}
                >
                    <option value="CoD">CoD</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                    <option value="Netbanking">Netbanking</option>
                </select>

                <div className="order-btn-container">
                    <button 
                    className="order-btn"
                    onClick={placeOrderHandler}
                    >
                        Place Order
                    </button>
                </div>
            </div>
            
            { status && <p className="order-confirmation">{status}</p> }

        </React.Fragment>

    );

}

export default Cart;