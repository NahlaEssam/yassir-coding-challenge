import React from 'react';
import './reservation.scss';
import { Reservation } from '../../types/reservation';

interface ReservationProps {
    reservation: Reservation;
}

function ReservationItem(props: ReservationProps) {
    const { reservation } = props;
    return (
        <div className='reservation-card-container'>
            <div className='reservation-card-flex'>
                <div className='id'>{reservation.id}</div>
                <div className='status'>{reservation.status}</div>
            </div>
            <div className='reservation-card-flex'>
                <div className='area-shift-container'>
                    <div className='item-container'> <span className='label'>Area:</span> <div className='item'>{reservation.area}</div></div>
                    <div className='item-container'> <span className='label'>Shift:</span> <div className='item'>{reservation.shift}</div></div>
                </div>

                <div>
                    <div className='name'>

                        <div className='item-container'> <span className='label'>Customer Name:</span> <div className='item'>{reservation.customer.firstName} {reservation.customer.lastName}</div></div>
                    </div>
                    <div className='item-container'> <span className='label'> Date:</span> <div className='item'> {reservation.businessDate}</div></div>


                </div>
            </div>
            <div className='item-container'> <span className='label'> Notes:</span> <div className='item'> {reservation.guestNotes || 'N/A'}</div></div>
        </div>
    );
}

export default ReservationItem;
