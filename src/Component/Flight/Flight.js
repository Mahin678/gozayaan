import { Box } from '@mui/material';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import OneWay from '../OneWay/OneWay';
import RoundWay from '../RoundWay/RoundWay';
import MultiWay from '../MultiWay/MultiWay';
import TourForm from '../TourForm/TourForm';
const Flight = () => {
    const [tab, setTab] = useState('one');
    const handleChange = (e) => {
        setTab(e.target.value);
    };
    return (
        <Box className="flight-container">
            <Box className="flight-tab">
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={tab}
                    onChange={handleChange}
                >
                    <FormControlLabel value="one" control={<Radio />} label="One Way" />
                    <FormControlLabel value="round" control={<Radio />} label="Round Way" />
                    <FormControlLabel value="multi" control={<Radio />} label="Multi City" />
                </RadioGroup>
            </FormControl>
            </Box>
            <Box className="flight-tab-content">
                {
                    tab == 'one' &&
                    <TourForm />

                }
                {
                    tab == 'round' &&
                    <TourForm />

                }
                {
                    tab == 'multi' &&
                    <TourForm  multi={true}/>

                }
            </Box>
        </Box>
    );
};

export default Flight;
