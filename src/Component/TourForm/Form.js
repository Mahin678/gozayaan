import React from 'react';
import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Form = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                            />
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                            />
                </Grid>
                <Grid item xs={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {/* <DemoContainer components={['DatePicker']}> */}
                            <DatePicker label="Basic date picker" />
                        {/* </DemoContainer> */}
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {/* <DemoContainer components={['DatePicker']}> */}
                            <DatePicker label="Basic date picker" />
                        {/* </DemoContainer> */}
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search" />}
                        />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
];