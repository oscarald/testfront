<<<<<<< Updated upstream
import { React } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import {
    Typography,
    CardContent,
    Grid,
    Button,
    createTheme,
} from "@mui/material";
=======
import { React } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { updateUser } from "../redux/actions/index";
import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { Typography, CardContent, Grid, Button, createTheme } from '@mui/material';
>>>>>>> Stashed changes

export default function Welcome() {
    const theme = createTheme({
        palette: {
            primary: {
                // aqui el color primario un gris suave para que el logo se pueda ver.
                main: '#cfcfcf',
                light: '#cfcfcf',
                dark: '#707070'
            },
            secondary: {
                // de secundario un azul suave para evitar que sea muy chocante
                main: '#4f83cc',
                light: '#4f83cc',
                dark: '#002f6c'
            }
        },
        //aqui aumente un poco el tamaño de todo
        typography: {
            fontSize: 18
        }
    });

    const navigate = useNavigate();

    const user = useSelector((state) => state.usersReducers.user);
<<<<<<< Updated upstream
    console.log(user);
=======
    const token = useSelector((state) => state.usersReducers.token);
    // console.log(user);
    // console.log(token);\
>>>>>>> Stashed changes

    //const [input, setInput] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
<<<<<<< Updated upstream
        navigate("/updateprofile");
=======
        navigate('/updateprofile');
    }

    function handleSubmitEnsayo(e) {
        e.preventDefault();
        navigate('/ensayo');
>>>>>>> Stashed changes
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={0} minHeight={400} justifyContent="center" alignItems="center">
                <Grid>
                    <CardContent>
                        <Typography gutterBottom variant="h3">
                            Welcome {localStorage.name && localStorage.name}!
                        </Typography>
                    </CardContent>

                    <Box sx={{ flexGrow: 1 }} />
<<<<<<< Updated upstream
                    <Button
                        href="/creacion"
                        color="secondary"
                        variant="contained"
                    >
                        Load a new Product
                    </Button>
                    {/* 
                                <Button
                                    color="secundary"
                                    variant="contained"
                                    onClick={on}
                                    
                                >
                                    Create !!
                                </Button>
                             */}

                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        onClick={handleSubmit}
                    >
=======
                    {localStorage.isAdmin === "true" ? (
                        <Button color="secondary" variant="contained" onClick={handleSubmitEnsayo}>
                            Go to Dashboard
                        </Button>
                    ) : null}
                    <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit}>
>>>>>>> Stashed changes
                        update-Profile
                    </Button>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
