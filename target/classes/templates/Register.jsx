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
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

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

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Register() {
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const navigate = useNavigate();
    const vertical = "top";
    const horizontal = "right";
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [userData, setUserData] = useState(null);
  
    function TransitionLeft(props) {
      return <Slide {...props} direction="left" />;
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenError(false);
    };
  
    const handleSuccessClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenSuccess(false);
    };
  
    const handleSubmit = async (event) => {
      setOpenError(false); // Reset the error state
      setOpenSuccess(false); // Reset the success state
  
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
  
      // Check if any field is empty or if passwords don't match
      if (
        !formData.get("username") ||
        !formData.get("email") ||
        !password ||
        !confirmPassword ||
        password !== confirmPassword
      ) {
        setOpenError(true);
        return;
      }
  
      const newUser = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: password,
        // Add more fields as needed
      };
  
      setUserData(newUser);
  
      // Show success message
      setOpenSuccess(true);
  
      // Add further handling logic as needed
    };
    
    return (
      <>
        <Snackbar
          open={openError}
          autoHideDuration={3000}
          onClose={handleClose}
          TransitionComponent={TransitionLeft}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Failed! Input something or match the password and confirm password. 
          </Alert>
        </Snackbar>
        <Snackbar
          open={openSuccess}
          autoHideDuration={3000}
          onClose={handleSuccessClose}
          TransitionComponent={TransitionLeft}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={handleSuccessClose} severity="success" sx={{ width: "100%" }}>
            Account created successfully!
          </Alert>
        </Snackbar>
      <div
        style={{
          backgroundImage: `url(${strp})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          color: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        <Box sx={boxstyle}>
          <Container>
            <Box height={35} />
            <Box sx={{ ...center, flexDirection: 'column', alignItems: 'center' }}>
              <Avatar sx={{ mb: "4px", bgcolor: "#174421" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h4" style={{ color: '#174421', marginTop: '10px' }}>
                Create An Account
              </Typography>
              <br />
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <Box height={25} />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    InputProps={{ style: { color: "#174421", borderColor: "#174421" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    InputProps={{ style: { color: "#174421", borderColor: "#174421" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                    InputProps={{ style: { color: '#174421', borderColor: '#174421' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    onChange={handleConfirmPassword}
                    InputProps={{ style: { color: '#174421', borderColor: '#174421' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="number"
                    label="Contact Number"
                    name="number"
                    type="tel"
                    autoComplete="new-password"
                    InputProps={{ style: { color: '#174421', borderColor: '#174421' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                    select
                    value={gender}
                    onChange={handleGenderChange}
                    InputProps={{ style: { color: '#174421', borderColor: '#174421' } }}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    {/* Add more options as needed */}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      mt: "10px",
                      borderRadius: 28,
                      color: "#ffffff",
                      backgroundColor: "#174421",
                      '&:hover': {
                        backgroundColor: "#F8BE0C",
                      },
                    }}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <br/>
            <Grid item xs={12} sx={{ ml: "3e", mr: "3em", textAlign: "center" }}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: "#174421",
                    fontSize: "0.8rem",
                    marginTop: "10px",
                  }}
                >
                  Already have an Account?
                  <span
                    style={{
                      color: "#174421",
                      cursor: "pointer",
                      fontSize: "0.8rem",
                    }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Sign In
                  </span>
                </Typography>
              </Stack>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
}
