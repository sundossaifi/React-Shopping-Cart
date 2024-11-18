import Navbar from "../Navbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import CartDetails from "../CartDetails/CartDetails";
import { Drawer } from "@mui/material";

export default function ShoppingCart() {
    const products = [
        { id: 1, name: "shirt", image: "https://assets.vogue.com/photos/65aec41c84ebddbed1ae9e82/3:4/w_640,c_limit/slide_11.jpg", price: 10 },
        { id: 2, name: "bolt chain", image: "https://assets.vogue.com/photos/65aec41c3a2e7db8a989b076/3:4/w_640,c_limit/slide_12.jpg", price: 20 },
        { id: 3, name: "YSL bag", image: "https://assets.vogue.com/photos/65aec421242b7d5f913bb66d/3:4/w_640,c_limit/slide_24.jpg", price: 30 },
        { id: 4, name: "Zara jacket", image: "https://coach.scene7.com/is/image/Coach/cu411_tn2_a0?$mobileProductTile$", price: 15 },
    ];

    return (
        <>
            <Navbar />
            <ProductGrid products={products} />
            <Drawer anchor="right" open>
                <div style={{ width: "400px", padding: "20px" }}>
                    <CartDetails />
                </div>
            </Drawer>
        </>
    );
}