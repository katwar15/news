import React from "react";
import { Typography, Button, Card } from "@mui/material";
import { NavBarProps as UserPageProps } from "../../helpers/interfaces";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import ProfilePhotoForm from "../ProfilePhotoForm/ProfilePhotoForm";
import { useContext } from "react";
import { authContext } from "../../helpers/authContex";

const UserPage = () => {
  const loggedIn = useContext(authContext);

  return (
    <>
      {loggedIn && auth.currentUser && (
        <div>
          <Typography
            variant="h1"
            align="center"
            sx={{ fontSize: "2rem", my: "1rem", pb: ".5rem" }}
            style={{ borderBottom: "1px solid #1976d2" }}
          >
            Your profile
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: "1rem",
              fontFamily: "Roboto",
              my: "1rem",
              pb: ".5rem",
              borderBottom: "1px solid #1976d2",
            }}
          >
            {auth.currentUser.email}
          </Typography>
          <ProfilePhotoForm />
          <Button
            variant="outlined"
            sx={{ display: "block", mx: "auto", my: "1rem." }}
            onClick={() => signOut(auth)}
          >
            Log Out
          </Button>
        </div>
      )}
    </>
  );
};

export default UserPage;
