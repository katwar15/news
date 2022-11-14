import React from "react";
import { Typography, TextField, Button, Card } from "@mui/material";
import { LoginFormData } from "../../helpers/interfaces";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const logUserIn = ({ email, password }: LoginFormData) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Typography variant="h2" align="center" sx={{ fontSize: "1.5rem" }}>
        Login
      </Typography>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(logUserIn)}
      >
        <TextField
          variant="outlined"
          type="email"
          placeholder="email"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("email", { required: true })}
        ></TextField>
        <TextField
          variant="outlined"
          type="password"
          placeholder="password"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("password", { required: true })}
        ></TextField>

        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto", mb: "1rem" }}
        >
          Log In
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
