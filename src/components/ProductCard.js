import { Card, CardMedia, CardContent, Button, Typography, CardActions } from "@mui/material";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
    return (
        <Card className={styles.card}>
            <CardMedia
                component="img"
                alt={product.name}
                height="fitContent"
                image={product.image}
                className={styles.cardMedia}
            />
            <CardContent className={styles.cardContent}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">${product.price}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.addToCartbtn}
                >
                    Add to Cart
                </Button>
            </CardActions>

        </Card>
    );
}