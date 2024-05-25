import {
  Box,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
  Collapse,
  Alert,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterScreen() {

  
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width:1000px)");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    // await fetch("/api/auth/register",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify({
    //     username,email,password
    //   })
    // })
    try {
      await axios
        .post("/api/auth/register", { username, email, password }, config)
        .then(navigate("/login"));
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(error.message);
      }

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p="2rem"
      m="2rem auto"
      borderRadius={5}
      backgroundColor={theme.palette.background.alt}
      sx={{ boxShadow: 5 }}
    >
      {
        <Collapse in={error}>
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        </Collapse>
      }
      <form onSubmit={registerHandler}>
        <Typography variant="h3">Sign Up</Typography>
        <TextField
          margin="normal"
          label="Username"
          fullWidth
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <TextField
          required
          label="Email"
          margin="normal"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
        <TextField
          required
          label="Password"
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          {" "}
        </TextField>
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ color: "white", mt: 2 }}
          fullWidth
        >
          Sign Up{" "}
        </Button>
      </form>
    </Box>
  );
}

export default RegisterScreen;
