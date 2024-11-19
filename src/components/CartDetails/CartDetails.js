import React from "react";
import { Typography, List, ListItem, Button } from "@mui/material";
import CartDetailsItem from "../CartDetailsItem";
import styles from "./CartDetails.module.css";

export default function CartDetails({ cart, toggleCheckout, total, deleteItem, updateQuantity }) {
    return (
        <div className={styles.container}>
            <Typography variant="h5" className={styles.header}>
                Cart Details
            </Typography>
            <List>
                {Object.keys(cart).length === 0 ? (
                    <Typography variant="body1">No items in cart</Typography>
                ) : (Object.values(cart).map((item) => (
                    <ListItem key={item.id} className={styles.listItem}>
                        <CartDetailsItem
                            product={item}
                            deleteItem={deleteItem}
                            updateQuantity={updateQuantity}
                        />
                    </ListItem>
                )))}
            </List>
            {Object.keys(cart).length > 0 && (
                <>
                    <Typography variant="h6">Total: ${total}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleCheckout}
                        className={styles.button}
                    >
                        Checkout
                    </Button>
                </>
            )}
        </div>
    );
}


