import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const defaultTheme = createTheme();

export default function StickyFooter() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >

                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="auto">
                        <Typography variant="body2" style={{ display: 'flex', justifyContent: 'center', gap: '0px 20rem' }}>
                            <span>
                                Project Work ITS Steve Jobs Academy corso 23<br/>
                                    -----------------------------------<br/>
                                    Copyright© by:<br/>
                                    -Alberto Cangialosi<br/>
                                    -Calogero Raia<br/>
                                    -Alessandro Russo<br/>
                            </span>
                            <span>
                                <img src="https://tse1.mm.bing.net/th?id=OIP.9M6x8cSTpnxfkJPLtt-PzAHaDh&pid=Api&P=0&h=180" alt="SteveJobsAcademy" />
                            </span>
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}