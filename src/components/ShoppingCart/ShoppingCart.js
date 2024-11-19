import Navbar from "../Navbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import CartDetails from "../CartDetails/CartDetails";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Drawer } from "@mui/material";
import { useState } from "react";
import styles from './ShoppingCart.module.css'
export default function ShoppingCart() {
    const products = [
        { id: 1, name: "shirt", image: "https://assets.vogue.com/photos/65aec41c84ebddbed1ae9e82/3:4/w_640,c_limit/slide_11.jpg", price: 10 },
        { id: 2, name: "bolt chain", image: "https://assets.vogue.com/photos/65aec41c3a2e7db8a989b076/3:4/w_640,c_limit/slide_12.jpg", price: 20 },
        { id: 3, name: "YSL bag", image: "https://assets.vogue.com/photos/65aec421242b7d5f913bb66d/3:4/w_640,c_limit/slide_24.jpg", price: 30 },
        { id: 4, name: "Coach jacket", image: "https://coach.scene7.com/is/image/Coach/cu411_tn2_a0?$mobileProductTile$", price: 15 },
    ];

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [checkoutVisible, setCheckoutVisible] = useState(false);
    const [cart, setCart] = useState({});

    function addToCart(product) {
        setCart((prevCart) => {
            const currentItem = prevCart[product.id];
            if (currentItem) {
                return {
                    ...prevCart,
                    [product.id]: { ...currentItem, quantity: currentItem.quantity + 1 },
                };
            } else {
                return {
                    ...prevCart,
                    [product.id]: { ...product, quantity: 1 },
                };
            }
        });
    }

    function calculateTotal() {
        return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);
    };

    function deleteItem(productId) {
        setCart((prevCart) => {
            const { [productId]: removedItem, ...newCart } = prevCart;
            return newCart;
        });
    };

    function updateQuantity(productId, operation) {
        setCart((prevCart) => {
            const currentItem = prevCart[productId];
            if (operation === "increase") {
                return {
                    ...prevCart,
                    [productId]: { ...currentItem, quantity: currentItem.quantity + 1 },
                };
            } else if (operation === "decrease" && currentItem.quantity > 1) {
                return {
                    ...prevCart,
                    [productId]: { ...currentItem, quantity: currentItem.quantity - 1 },
                };
            }
            return prevCart;
        });
    };

    function calculateCartCount() {
        return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    }

    function handleCheckout() {
        alert(`Thank you for your order!`);
        setCart({});
        setCheckoutVisible(false);
        setDrawerOpen(false);
    };

    return (
        <>
            <Navbar onCartClick={() => setDrawerOpen(true)} count={calculateCartCount()} />
            <ProductGrid products={products} addToCart={addToCart} />
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className={styles.container}>
                    {!checkoutVisible ? (
                        <CartDetails
                            cart={cart}
                            total={calculateTotal()}
                            deleteItem={deleteItem}
                            updateQuantity={updateQuantity}
                            toggleCheckout={() => setCheckoutVisible(true)}
                        />
                    ) : (
                        <CheckoutForm
                            handleCheckout={handleCheckout}
                            onBack={() => setCheckoutVisible(false)}
                        />
                    )}
                </div>
            </Drawer>
        </>
    );
}