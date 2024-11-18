import { Grid2, Container } from '@mui/material';
import ProductCard from '../ProductCard';
import styles from './ProductGrid.module.css'

export default function ProductGrid({ products }) {
    return (
        <main>
            <Container className={styles.cardGrid} maxWidth='md'>
                <Grid2 container spacing={4}  alignItems={'center'}>
                    {products.map((product) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                            <ProductCard product={product} />
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </main>
    )
}