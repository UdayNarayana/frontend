import React,{useState,useEffect} from 'react';
import '../styles/Home.css';

const Home = () => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8082/store/product/view-products")
            .then(data => data.json())
            .then(result => setProductList(result))

    }, []);

    const addToCartHandler = (productId) => {

        fetch("http://localhost:8083/store/cart/add-to-cart/" + productId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        })
            .then(() => console.log("Item added to cart"))
            .catch(err => console.log(err))

    }

    return(
        <React.Fragment>

            <section className="product-list-wrapper">

                <h1>Welcome to Store!</h1>

                {
                    productList.map(product => (
                        <section className="product-section" key={product.productId}>

                            <div className="product-img">
                                <img src={product.image} alt="product information" />
                            </div>

                            <div className="product-info">
                                <p className="product-name">{product.productName}</p>
                                <p>{product.description}</p>
                                <p><span>&#8377;</span>{product.price}</p>
                                <p
                                    className={product.availabilityStatus === "Out of Stock" ? "out-of-stock" : "in-stock"}
                                >{product.availabilityStatus}</p>
                                <button
                                    value={product.productId}
                                    disabled={product.availabilityStatus === "Out of Stock"}
                                    className={
                                        product.availabilityStatus === "Out of Stock" ?
                                            "disabled-add-btn" : "add-cart-btn"
                                    }
                                    onClick={e => addToCartHandler(e.target.value)}
                                >
                                    Add to cart
                                </button>
                            </div>

                        </section>
                    ))
                }

            </section>

        </React.Fragment>
    );

}

export default Home;