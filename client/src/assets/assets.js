

export const dummyServiceData = [
    {
        _id: '1',
        category: "Appliance Repair",
        service: "Washing Machine Repair",
        price: 399,
        image: '/about.png',
    },
    {
        _id: '2',
        category: "Appliance Repair",
        service: "Refrigerator Repair",
        price: 499,
        image: '/about.png',
    },
    {
        _id: '3',
        category: "Appliance Repair",
        service: "Air Conditioner Repair",
        price: 699,
        image: '/about.png',
    },
    {
        _id: '4',
        category: "Appliance Repair",
        service: "Microwave Ovens Repair",
        price: 499,
        image: '/about.png',
    },
    {
        _id: '5',
        category: "Electrical Services",
        service: "Switch & socket repair",
        price: 499,
        image: '/about.png',
    },
    {
        _id: '6',
        category: "Electrical Services",
        service: "Wiring & rewiring",
        price: 499,
        image: '/about.png',
    },
    {
        _id: '7',
        category: "Electrical Services",
        service: "Fan & light installation",
        price: 499,
        image: '/about.png',
    },
    {
        _id: '8',
        category: "Electrical Services",
        service: "Inverter & power backup setup",
        price: 499,
        image: '/about.png',
    },
]

export const dummyBookingsData = [
    {
        _id: '1',
        user: {name: "Kanagavel"},
        service: dummyServiceData[0],
        price: 4500,
        status: "Completed",
        isPaid: true,
        address: "Bhavani, Erode",
        date: "Tue Feb 20 2026 00:00:00 GMT+0530 (India Standard Time)"
    },
    {
        _id: '2',
        user: {name: "Kanagavel"},
        service: dummyServiceData[3],
        price: 4500,
        category: "Appliance Repair",
        status: "Upcoming",
        isPaid: false,
        address: "Bhavani, Erode",
        date: "Tue Feb 20 2026 00:00:00 GMT+0530 (India Standard Time)"
    },
    {
        _id: '3',
        user: {name: "Kanagavel"},
        service: dummyServiceData[6],
        category: "Appliance Repair",
        price: 4500,
        status: "Canceled",
        isPaid: false,
        address: "Bhavani, Erode",
        date: "Tue Feb 20 2026 00:00:00 GMT+0530 (India Standard Time)"
    }
]

export const dummyWorkersData = [
    {
        _id: '1',
        name: 'kanagavel',
        service: 'Appliance Repair',
        salary: 10000,
    },
    {
        _id: '2',
        name: 'kanagu',
        service: 'Electrical Services',
        salary: 1000,
    },
    {
        _id: '3',
        name: 'vel',
        service: 'Cabinet Installation',
        salary: 15000,
    },
]