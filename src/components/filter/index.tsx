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
        date: undefined,
        shift: '',
        area: ''
    }
    const [filter, setFilter] = React.useState(basicFilters);
    const [statusValue, setStatusValue] = React.useState('');
    const [dateValue, setDateValue] = React.useState(undefined);
    const [shitfValue, setShitfValue] = React.useState('');
    const [areaValue, setAreaValue] = React.useState('');

    const handleChange = (key: string, event: SelectChangeEvent) => {
        const value = event.target.value;
        if (key === 'status') {
            setStatusValue(value);
        } else if (key === 'shift') {
            setShitfValue(value)
        } else if (key === 'area') {
            setAreaValue(value)
        } else if (key === 'date') {
            setDateValue(value)
        }

        handleFilterChange(key, value);
    };
    const handleDateChange = (newValue: Dayjs) => {
        const value = newValue? newValue.toDate().toDateString(): undefined;
        setDateValue(dayjs(value))
        handleFilterChange('date', value);
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
        setDateValue(undefined);
        handleFilter(basicFilters)
    }
    return (
        <Box sx={{
            padding: '15px', border: 'solid 1px lightgray', borderRadius: '5px',
            marginBottom: '15px', display: 'flex', justifyContent: 'space-between'
        }} >
            <FormControl>
                <InputLabel>Status:</InputLabel>
                <Select
                    className='filter-item'
                    value={statusValue}
                    label="Age"
                    onChange={(e) => handleChange('status', e)}
                > {
                        statusFilter.map(sFilter => (
                            <MenuItem key={sFilter.id} value={sFilter.value}>{sFilter.key}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className='filter-item' label="Date" value={dateValue}
                    onChange={(newValue) => handleDateChange(newValue)} />

            </LocalizationProvider>

            <FormControl >
                <InputLabel>Shift:</InputLabel>
                <Select
                    className='filter-item'
                    value={shitfValue}
                    label="Age"
                    onChange={(e) => handleChange('shift', e)}
                >
                    {
                        shiftFilter.map(sFilter => (
                            <MenuItem key={sFilter.id} value={sFilter.value}>{sFilter.key}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <FormControl >
                <InputLabel>Area:</InputLabel>
                <Select
                    className='filter-item'
                    value={areaValue}
                    label="Age"
                    onChange={(e) => handleChange('area', e)}
                >

                    {
                        areaFilter.map(aFilter => (
                            <MenuItem key={aFilter.id} value={aFilter.value}>{aFilter.key}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>

            <Button onClick={resetFilters} className="reset-btn" variant="contained" sx={{background: 'black'}}>Reset Filters</Button>
        </Box>
    );
}

export default Filters;
