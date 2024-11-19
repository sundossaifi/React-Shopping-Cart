import React from "react";
import { Grid2, Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "../styles/CartDetailsItem.module.css";

export default function CartDetailsItem({ product, deleteItem, updateQuantity }) {
    return (
        <Grid2 container spacing={2} alignItems="center" className={styles.container}>
            <Grid2 size={{ xs: 6, sm:4 }}>
                <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />
            </Grid2>
            <Grid2 size={{ xs: 6, sm:4 }}>
                <Typography variant="body1" className={styles.name}>
                    {product.name}
                </Typography>
                <Typography variant="body2" className={styles.price}>
                    ${product.price} x {product.quantity}
                </Typography>
            </Grid2>
            <Grid2 size={{ xs: 4,  sm:6}}>
                <div className={styles.buttonGroup}>
                    <Button variant="outlined" color="primary" onClick={() => updateQuantity(product.id, "increase")}>
                        +
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => updateQuantity(product.id, "decrease")}>
                        -
                    </Button>
                    <IconButton color="error" onClick={() => deleteItem(product.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </Grid2>
        </Grid2>
    );
}

