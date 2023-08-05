import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Form from './Form';
import { useState } from 'react';
const TourForm = ({ multi }) => {

    const [elementLength, setLength] = useState([]);

    // const element = [<Form multi={multi} />]; 

    // const 
    const handleClick = (e) => {
        // eslint-disable-next-line react/jsx-key
        setLength([...elementLength, <Form multi={multi} />]);
    }
    return (
        <Box ClassName="x" row>
            <Form multi={multi} />
            {
                elementLength.map((element, index) => (
                <Box key={index * .5}>{element}</Box>
            ))}
            {
                    multi && <Button onClick={handleClick} variant="outlined">Add New</Button>
            }
        </Box>
    );
};

export default TourForm;
