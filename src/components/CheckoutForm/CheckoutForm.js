import { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CheckoutForm({ onBack, handleCheckout }) {
    const [formData, setFormData] = useState({ name: "", email: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit() {
        if (!formData.name || !formData.email) {
            alert("Please fill in all fields!");
            return;
        }
        alert(`Order placed successfully by ${formData.name}`);
        handleCheckout();
        setFormData({ name: "", email: "" });
    }

    return (
        <Paper>
            <Paper sx={{ padding: "20px" }}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={onBack}
                    sx={{ marginBottom: "10px" }}
                >
                    Back to Cart
                </Button>
                <Typography variant="h5" gutterBottom>
                    Checkout
                </Typography>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: "10px" }}
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: "10px" }}
                    value={formData.email}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ marginTop: "10px" }}
                >
                    Submit Order
                </Button>
            </Paper>
        </Paper>
    )
}