import React from 'react';
import './search.scss';
import { Box, FormControl, InputLabel, TextField } from '@mui/material';


function Search({ handleSearch }) {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
        if (key === 'firstName') {
            setFirstName(event.target.value);
            handleSearch({ firstName: event.target.value, lastName: lastName });
        } else {
            setLastName(event.target.value);
            handleSearch({ firstName: firstName, lastName: event.target.value });
        }
    };


    return (
        <Box>
            <FormControl className='search-form-control'>
                <div className='search-label'>Search by:</div>
                <div className='inputs-container'>
                    <div className='search-item'>
                        <TextField

                            id="outlined-controlled"
                            label="First Name"
                            value={firstName}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                handleChange('firstName', event);
                            }}
                        />
                    </div>
                    <div className='search-item'>
                        <TextField

                            id="outlined-controlled"
                            label="Last Name"
                            value={lastName}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                handleChange('lastName', event);
                            }}
                        />
                    </div>

                </div>

            </FormControl>

        </Box>
    );
}

export default Search;
