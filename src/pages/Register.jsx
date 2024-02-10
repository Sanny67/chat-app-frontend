import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Alert, Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { performRegisterAction } from '../store/Auth/actions';
import { Link } from 'react-router-dom';

const Register = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });
    const [errors, setErrors] = useState({ username: "", email: "", password: "", confirmPassword: "" });


    const handleInput = (key, value) => {
        setFormData((data) => ({ ...data, [key]: value }));
    };

    const handleValidation = () => {
        const { username, email, password, confirmPassword } = formData;
        const err = {};

        // Username validation
        if (username.length <= 3) {
            err.username = "Username should be greated than 3 characters";
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            err.email = "Email address should be valid";
        }
        
        // Check if password meets the criteria
        if(password.length < 8){
            err.password = "Password should be at least 8 characters";
        } else if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}/.test(password)) {
            err.password = "Password should contain at least 1 uppercase letter, 1 digit, and 1 special character";
        }

        // Check if passwords match
        if(password !== confirmPassword){
            err.confirmPassword = "Passwords don't match";
        }

        if(err.length > 0){
            setErrors({...errors, ...err});
            return false;
        }

        return true;

    }

    const handleSubmit = () => {
        if(handleValidation){
            dispatch(performRegisterAction(formData));
        }
    }

    return (
        <Grid container spacing={2} sx={{width: '100%'}}>
            <Grid item xs={6}>
                section
            </Grid>
            
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1, px: 5, py: 0 }}>
                        {/* <Alert severity="error" sx={{ display: errorMessage !== '' ? 'flex' : 'none' }}>{errorMessage}</Alert> */}
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    variant="standard"
                                    placeholder="John Doe"
                                    value={formData.username}
                                    onChange={(e) => handleInput("username", e.target.value)}
                                    error={errors.username !== ''}
                                    helperText={errors.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="email"
                                    variant="standard"
                                    placeholder="johndoe@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => handleInput("email", e.target.value)}
                                    error={errors.email !== ''}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    variant="standard"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => handleInput("password", e.target.value)}
                                    error={errors.password !== ''}
                                    helperText={errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    variant="standard"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInput("confirmPassword", e.target.value)}
                                    error={errors.confirmPassword !== ''}
                                    helperText={errors.confirmPassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                            </Grid>
                            <Grid item xs={12}>
                                Already have an account? <Link to="/login" style={{ marginLeft: '5px', color: 'blue' }}>Login</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Register;
