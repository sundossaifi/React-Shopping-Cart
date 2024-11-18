import React from "react";
import { Typography, List, ListItem } from "@mui/material";
import CartDetailsItem from "../CartDetailsItem";
import styles from "./CartDetails.module.css";

export default function CartDetails() {
    const sampleCart = [
        {
            id: 1,
            name: "Product 1",
            image: "https://coach.scene7.com/is/image/Coach/cu411_tn2_a0?$mobileProductTile$",
            price: 10,
            quantity: 2,
        },
        {
            id: 2,
            name: "Product 2",
            image: "https://coach.scene7.com/is/image/Coach/cu411_tn2_a0?$mobileProductTile$",
            price: 20,
            quantity: 1,
        },
    ];

    return (
        <div className={styles.container}>
            <Typography variant="h5" className={styles.header}>
                Cart Details
            </Typography>
            <List>
                {sampleCart.map((product) => (
                    <ListItem key={product.id} className={styles.listItem}>
                        <CartDetailsItem product={product} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="h6" className={styles.total}>
                Total: $40
            </Typography>
        </div>
    );
}


