import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Flight from '../Flight/Flight';

export default function CustomTab() {
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};

return (
    <Box className={"tab-wrapper"}>
        <Box className={"tab-nav"}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Flight"  className="tab-nav-item"/>
                <Tab label="Hotel" className="tab-nav-item"/>
                <Tab label="Tour" className="tab-nav-item"/>
            </Tabs>
        </Box>
        <Box className="tab-result">
            {
                value == 0 ? <Flight /> : ''
            }
            {
                value == 1 && <Box>Hello 1</Box>
            }
            {
                value == 2 && <Box>Hello 2</Box>
            }
        </Box>
    </Box>
);
}