import React from "react";
import { Grid2, Box, Typography, Button } from "@mui/material";
import styles from "../styles/CartDetailsItem.module.css";

export default function CartDetailsItem({ product }) {
    return (
        <Grid2 container spacing={2} alignItems="center" className={styles.container}>
            <Grid2>
                <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />
            </Grid2>
            <Grid2>
                <Typography variant="body1" className={styles.name}>
                    {product.name}
                </Typography>
                <Typography variant="body2" className={styles.price}>
                    ${product.price} x {product.quantity}
                </Typography>
            </Grid2>
            <Grid2>
                <div className={styles.buttonGroup}>
                    <Button variant="outlined" color="primary" xs>
                        +
                    </Button>
                    <Button variant="outlined" color="secondary" xs>
                        -
                    </Button>
                </div>
            </Grid2>

            <Grid2>
                <Button variant="outlined" color="error">
                    Remove
                </Button>
            </Grid2>
        </Grid2>
    );
}

