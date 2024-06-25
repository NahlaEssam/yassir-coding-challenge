const statusFilter = [{
    id: 0,
    key: 'Confirmed',
    value: 'CONFIRMED'
}, {
    id: 1,
    key: 'Seated',
    value: 'SEATED'
}, {
    id: 2,
    key: 'Checked Out',
    value: 'CHECKED OUT'
}, {
    id: 3,
    key: 'Not Confirmed',
    value: 'NOT CONFIRMED'
}];

const shiftFilter = [

    {
        id: 0,
        key: 'Breakfast',
        value: 'BREAKFAST'
    },
    {
        id: 1,
        key: 'Lunch',
        value: 'LUNCH'
    },
    {
        id: 2,
        key: 'Dinner',
        value: 'DINNER'
    }];

const areaFilter = [{
    id: 0,
    key: 'Bar',
    value: 'BAR'
}, {
    id: 1,
    key: 'Main Room',
    value: 'MAIN ROOM'
}];


export { statusFilter, shiftFilter, areaFilter };