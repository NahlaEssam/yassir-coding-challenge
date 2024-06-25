import React from 'react';
import './filter.scss';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import { areaFilter, shiftFilter, statusFilter } from '../../mocks/filters';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';


function Filters({ handleFilter }) {
    const basicFilters = {
        status: '',
        date: '',
        shift: '',
        area: ''
    }
    const [filter, setFilter] = React.useState(basicFilters);
    const [statusValue, setStatusValue] = React.useState('');
    const [dateValue, setDateValue] = React.useState('');
    const [shitfValue, setShitfValue] = React.useState('');
    const [areaValue, setAreaValue] = React.useState('');

    const handleChange = (key: string, event: SelectChangeEvent) => {
        if (key === 'status') {
            setStatusValue(event.target.value)
        } else if (key === 'shift') {
            setShitfValue(event.target.value)
        } else if (key === 'area') {
            setAreaValue(event.target.value)
        } else if (key === 'date') {
            setDateValue(event.target.value)
        }

        handleFilterChange(key, event.target.value);
    };
    const handleDateChange = (newValue: Dayjs) => {
        setDateValue(newValue.toDate().toDateString())
        handleFilterChange('date', newValue.toDate().toDateString());
    };

    const handleFilterChange = (key: string, newValue: string) => {
        let newFilter = filter;
        newFilter[key] = newValue;
        setFilter(newFilter);
        handleFilter(newFilter)
    };

    const resetFilters = () => {
        setFilter(basicFilters);
        setStatusValue('');
        setShitfValue('');
        setAreaValue('');
        setDateValue('');
        handleFilter(basicFilters)
    }
    return (
        <Box sx={{ padding: '15px', border: 'solid 1px lightgray', borderRadius: '5px',
            marginBottom: '15px', display: 'flex', justifyContent: 'space-between' }} >
            <FormControl>
                <InputLabel id="demo-simple-select-label">Status:</InputLabel>
                <Select
                    className='filter-item'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={statusValue}
                    label="Age"
                    onChange={(e) => handleChange('status', e)}
                > {
                        statusFilter.map(sFilter => (
                            <MenuItem value={sFilter.value}>{sFilter.key}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='filter-item' label="Date" value={dayjs(dateValue)}
                    onChange={(newValue) => handleDateChange(newValue)} />

            </LocalizationProvider>

            <FormControl >
                <InputLabel id="demo-simple-select-label">Shift:</InputLabel>
                <Select
                    className='filter-item'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={shitfValue}
                    label="Age"
                    onChange={(e) => handleChange('shift', e)}
                >
                    {
                        shiftFilter.map(sFilter => (
                            <MenuItem value={sFilter.value}>{sFilter.key}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Area:</InputLabel>
                <Select
                    className='filter-item'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={areaValue}
                    label="Age"
                    onChange={(e) => handleChange('area', e)}
                >

                    {
                        areaFilter.map(aFilter => (
                            <MenuItem value={aFilter.value}>{aFilter.key}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>

            <Button onClick={resetFilters} variant="contained">Reset Filters</Button>
        </Box>
    );
}

export default Filters;
