import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar varient="dense" className={styles.navBar}>
                <Typography variant="h5">Shopping Cart</Typography>
                <IconButton color="inherit">
                    <Badge color="secondary" badgeContent={5}>
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}