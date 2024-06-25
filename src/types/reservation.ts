interface customer {
    firstName: string,
    lastName: string,
}

export interface Reservation {
    id: number,
    businessDate: string,
    status: string,
    shift: string,
    start: string,
    end: string,
    quantity: number,
    customer: customer,
    area: string,
    guestNotes: string,
}
