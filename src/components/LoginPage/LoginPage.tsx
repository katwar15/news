import React from "react";
import { Typography, Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Card sx={{ mt: "0.5rem", p: "20px" }}>
        <LoginForm />
        <Typography
          variant="h6"
          align="center"
          sx={{ fontSize: "1.5rem", fontWeight: 100, p: "30px" }}
        >
          Don't have an account yet? Register now!
        </Typography>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ display: "block", mx: "auto" }}>
            Register
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default LoginPage;
