import React from "react";
import { Typography, TextField, Button, Card } from "@mui/material";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "../../helpers/interfaces";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const RegisterPage = () => {
  // destrukturyzacja obiektu:
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const registerUser = ({ email, password, password2 }: RegisterFormData) => {
    // NIE UŻYWAJ LINKóW GSTATIC DO IMPORTOW Z FB, MOŻESZ UŻYC NP. firebase/app, firebase/auth
    // Stwórz projekt firebase, włącz w nim authentication oraz logowanie przez email/password
    // 1. Sprawdź czy hasła się zgadzają (czy są identyczne)
    // 2. Jeżeli tak, wywołaj odpowiednią funkcję firebase'ową i zarejestruj użytkownika
    // 3. Do tej funkcji (pkt 2) podepnij thena, w nim console.log('success') i do tego catch console.log(error)

    if (password === password2) {
      // właściwa rejestracja użytkownika, CZYLI DAJESZ ODWOŁANIE GDZIE TO MA WRZUCIĆ!!!!
      createUserWithEmailAndPassword(auth, email, password)
        // mamy promisa, którego będziemy obsługiwać za pomocą then'a

        .then(() => console.log("Success"))
        .catch((err) => console.log(err));
    } else {
      console.log("hasla sie nie zgadzaja");
    }
  };
  return (
    <Card sx={{ mt: "1.3rem", p: "10px" }}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(registerUser)}
      >
        <Typography variant="h2" align="center" sx={{ fontSize: "1.5rem" }}>
          Register new account
        </Typography>
        <TextField
          type="email"
          placeholder="email"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          //   register zwraca atrybuty, tak nazywasz pole z inputem, które zwrócą obiekt
          // drugi atrybut to np. required: w tym przypadku zaznaczasz, że to pole jest wymagane
          {...register("email", { required: true })}
        ></TextField>
        <TextField
          type="password"
          placeholder="password"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("password", { required: true })}
        ></TextField>
        <TextField
          type="password"
          placeholder="repeat password"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("password2", { required: true })}
        ></TextField>
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto" }}
        >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default RegisterPage;
