import React, { useState, forwardRef } from 'react';
import strp from "./frmpc/strp.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import frmlogo from "./frmpc/frmlogo.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; 
import Avatar from "@mui/material/Avatar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from '@mui/system';
import { FormControlLabel } from '@mui/material';
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";  // Add this import
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
// import { authenticateUser } from "./userService";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "85%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const vertical = "top";
  const horizontal = "right";

  const handleClose = (event, reason) => {
    if (reason === "clicaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const username = formData.get("email");
    const password = formData.get("password");
  
    // Hard-coded credentials for testing
    const validUsername = "testuser";
    const validPassword = "testpassword";
  
    // Basic validation
    if (!username || !password) {
      // Show alert for blank fields
      setOpen(true);
      return;
    }
  
    // Check if the entered credentials match the hard-coded values
    if (username === validUsername && password === validPassword) {
      // Successfully authenticated
      navigate("/Homepage");
    } else {
      setOpen(true); // Show alert for incorrect username/password
    }
  };
  
  //   try {
  //     const response = await fetch("/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  
  //     if (response.ok) {
  //       // Successfully authenticated
  //       navigate("/success-page");
  //     } else {
  //       setOpen(true); // Show alert for incorrect username/password
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     setOpen(true); // Show alert for any error
  //   }
  // };
  
  

  return (
    <StyledEngineProvider injectFirst>
      <>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          TransitionComponent={TransitionLeft}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Failed! Enter correct username and password.
          </Alert>
        </Snackbar>
        <div
          style={{
            backgroundImage: `url(${strp})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            color: "#f5f5f5",
          }}
        >
          <Box sx={boxstyle}>
            <Grid container>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Box
                  style={{
                    backgroundImage: `url(${frmlogo})`,
                    backgroundSize: "cover",
                    height: "85vh",
                    color: "#f5f5f5",
                  }}
                ></Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box
                  style={{
                    backgroundSize: "cover",
                    height: "70vh",
                    minHeight: "500px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {/* <ThemeProvider theme={lightTheme}> */}
                  <Container>
                    <Box height={35} />
                    <Box sx={{ ...center, flexDirection: 'column', alignItems: 'center' }}>
                      <Avatar sx={{ mb: "4px", bgcolor: "#174421" }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h4" style={{ color: '#174421', marginTop: '10px' }}>
                        Sign In
                      </Typography>
                      <br />
                    </Box>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Username"
                          name="email"
                          InputProps={{ style: { color: "#174421", borderColor: "#174421" } }}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                        <TextField
                          required
                          fullWidth
                          id="password"
                          label="Password"
                          name="password"
                          type="password"
                          autoComplete="new-password"
                          InputProps={{ style: { color: "#174421", borderColor: "#174421" } }}
                        />
                      </Grid>
                      <Grid item xs={10} sx={{ ml: "3em", mr: "3em" }}>
  <Stack direction="row" justifyContent="space-between" alignItems="center">
    <FormControlLabel
      sx={{ width: "auto", whiteSpace: "nowrap", fontSize: "0.7rem" }} // Adjusted font size
      onClick={() => setRemember(!remember)}
      control={<Checkbox checked={remember} />}
      label={
        <Typography style={{ color: "#174421" }}>
          Remember me
        </Typography>
      }
      labelPlacement="end"
      InputProps={{ style: { color: "#174421", borderColor: "#174421" } }}
    />
    <Typography
      variant="body1"
      style={{
        marginTop: "10px",
        cursor: "pointer",
        fontSize: "0.7rem", // Adjusted font size
        color: "#174421",
      }}
      onClick={() => {
        navigate("/reset-password");
      }}
    >
      Forgot password?
    </Typography>
  </Stack>
</Grid>
<Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
  <Button
    type="submit"
    variant="contained"
    fullWidth="true"
    size="large"
    sx={{
      mt: "10px",
      mr: "20px",
      borderRadius: 28,
      color: "#ffffff",
      minWidth: "170px",
      backgroundColor: "#174421",
      '&:hover': {
        backgroundColor: "#F8BE0C", // Hover color
      },
    }}
    onClick={() => {
      navigate("/Homepage");
    }}
  >
    Sign in
  </Button>
</Grid>
<br/>
<Grid item xs={12} sx={{ ml: "3e", mr: "3em", textAlign: "center" }}>
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
    <Typography
      variant="body1"
      component="span"
      style={{
        color: "#174421",
        fontSize: "0.8rem", // Adjusted font size
        marginTop: "10px",
      }}
    >
      Not registered yet?
      <span
        style={{
          color: "#174421",
          cursor: "pointer",
          fontSize: "0.8rem", // Adjusted font size
        }}
        onClick={() => {
          navigate("/register");
        }}
      >
        Create an Account
      </span>
    </Typography>
  </Stack>
</Grid>
                    </Grid>
                  </Container>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </>
    </StyledEngineProvider>
  );
}
