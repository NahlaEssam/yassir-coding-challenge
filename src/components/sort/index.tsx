import React from 'react';
import './sort.scss';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';


function Sort({ handleSort }) {

    const [sortValue, setSortValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSortValue(event.target.value);
        handleSort(event.target.value)
    };


    return (
        <Box sx={{  }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                <Select
                    className='sort-item'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortValue}
                    label="Age"
                    onChange={(e) => handleChange(e)}
                >
                    <MenuItem value={'id'}>Guest Number</MenuItem>
                    <MenuItem value={'name'}>Guest Name</MenuItem>

                </Select>
            </FormControl>

        </Box>
    );
}

export default Sort;
