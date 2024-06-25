import React from 'react';
import './reservations.scss';
import data from '../../mocks/reservations';
import ReservationItem from '../../components/reservation-item';
import Filters from '../../components/filter';
import Sort from '../../components/sort';
import Search from '../../components/search';

function ReservationView() {

    const [reservations, setReservations] = React.useState(data.reservations);
    const [lastReservations, setLastReservations] = React.useState(data.reservations);

    const checkEmptyFilters = (filters) => {
        let empty = true;
        for (const [key, value] of Object.entries(filters)) {
            if (value !== '') {
                empty = false;
            }

        }

        return empty;
    }
    const filterReservations = (filters: any) => {
        if (!checkEmptyFilters(filters)) {
            const filteredData = data.reservations.filter(_res => {
                const filterDate = new Date(filters.date);
                const businessDate = new Date(_res.businessDate);
                return (filters.status === '' || filters.status === _res.status) &&
                    (filters.date === '' || filterDate.toDateString() === businessDate.toDateString()) &&
                    (filters.shift === '' || filters.shift === _res.shift) &&
                    (filters.area === '' || filters.area === _res.area)
            });

            setReservations(filteredData);
            setLastReservations(filteredData);
        } else {
            setReservations(data.reservations);
            setLastReservations(data.reservations);
        }
    };

    const sortReservations = (key: string) => {
        const sortedResevations = reservations.sort((a, b) => {
            let itemA;
            let itemB;
            if (key === 'name') {
                itemA = (a.customer.firstName + a.customer.lastName).toUpperCase();
                itemB = (b.customer.firstName + b.customer.lastName).toUpperCase();
            } else {
                itemA = a.id;
                itemB = b.id;
            }

            if (itemA < itemB) {
                return -1;
            }
            if (itemA > itemB) {
                return 1;
            }
            return 0;
        });
        setReservations([]);
        setTimeout(() => {
            setReservations(sortedResevations);
            setLastReservations(sortedResevations);
        }, 0);
    };

    const searchReservations = (searchValues) => {
        const filteredReservations = lastReservations.filter(_res => {
            return _res.customer.firstName.toUpperCase().startsWith(searchValues.firstName.toUpperCase()) &&
                _res.customer.lastName.toUpperCase().startsWith(searchValues.lastName.toUpperCase())
        });

        setReservations([]);
        setTimeout(() => {
            setReservations(filteredReservations);
        }, 0);

    }
    return (
        <div className='reservation-view'>

            <Filters handleFilter={filterReservations} />
            <div className='sort-search-container'>
                <Search handleSearch={searchReservations} />
                <Sort handleSort={sortReservations} />
            </div>
            <div className='results-label'> Results: </div>
            {reservations.length !== 0  && reservations.map(item => (
                <ReservationItem reservation={item} />
            ))}
            {reservations.length === 0 && (<div className='no-results-text'>No Reservations</div>)}
        </div>
    );
}

export default ReservationView;
