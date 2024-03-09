const users = [
    {
        username: 'kaleli',
        password: 'test123'
    },
    {
        username: 'kalchr',
        password: 'test123'
    }
];

const employees = [
    {
        psnr: 1,
        tag: null,
        profilepicture: '/profilepictures/1_Elias_Kalkhofer.jpg',
        username: 'KALELI',
        firstname: 'Elias',
        lastname: 'Kalkhofer',
        birthdate: "2003-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "kalkhofer.elias@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 2,
        tag: null,
        profilepicture: '/profilepictures/2_Gabriel_Kalkhofer.jpg',
        username: 'KALGAB',
        firstname: 'Gabriel',
        lastname: 'Kalkhofer',
        birthdate: "2005-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "kalkhofer.gabriel.dominik@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 3,
        tag: null,
        profilepicture: '/profilepictures/3_Anna_Kalkhofer.jpg',
        username: 'KALANN',
        firstname: 'Anna',
        lastname: 'Kalkhofer',
        birthdate: "2009-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "kalkhofer.anna@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 4,
        tag: null,
        username: 'KALCHR',
        firstname: 'Christian',
        lastname: 'Kalkhofer',
        birthdate: "2001-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "kalkhofer.christian@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 5,
        tag: null,
        profilepicture: '/profilepictures/5_Evelyn_Kalkhofer.jpg',
        username: 'KALEVE',
        firstname: 'Evelyn',
        lastname: 'Kalkhofer',
        birthdate: "2002-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "kalkhofer.evelyn@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 9,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "2000-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "test@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 10,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "2000-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "test@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 11,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "2000-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "test@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 12,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "2000-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "test@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 13,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "2000-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "test@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 14,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "2000-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "test@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 15,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "2000-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "test@gmail.com",
        createddate: null,
        editeddate: null
    }
];

const transponders = [
    {
        uid: "AA:AA:AA:AA:AA:AA:AA",
        createddate: null
    },
    {
        uid: "BB:BB:BB:BB:BB:BB:BB",
        createddate: null
    },
    {
        uid: "CC:CC:CC:CC:CC:CC:CC",
        createddate: null
    },
    {
        uid: "DD:DD:DD:DD:DD:DD:DD",
        createddate: null
    },
    {
        uid: "EE:EE:EE:EE:EE:EE:EE",
        createddate: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FF",
        createddate: null
    },
    {
        uid: "AF:AF:AF:AF:AF:AF:AF",
        createddate: null
    },
    {
        uid: "BF:BF:BF:BF:BF:BF:BF",
        createddate: null
    },
    {
        uid: "CF:CF:CF:CF:CF:CF:CF",
        createddate: null
    },
    {
        uid: "DF:DF:DF:DF:DF:DF:DF",
        createddate: null
    },
    {
        uid: "EF:EF:EF:EF:EF:EF:EF",
        createddate: null
    },
    {
        uid: "FA:FA:FA:FA:FA:FA:FA",
        createddate: null
    }
]

const timerecords = [
    {
        emppsnr: 1,
        date: "01-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "05:00:00"
            },
            {
                number: 2,
                type: "geht",
                timestamp: "12:00:00"
            },
            {
                number: 3,
                type: "kommt",
                timestamp: "13:00:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "14:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 2,
        date: "01-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "05:00:00"
            },
            {
                number: 2,
                type: "geht",
                timestamp: "12:00:00"
            },
            {
                number: 3,
                type: "kommt",
                timestamp: "13:00:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "14:00:00"
            }
        ],
        workingtime: "13:00",
        workingminutes: "780",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "02-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "06:00:00"
            },
            {
                number: 2,
                type: "geht",
                timestamp: "12:00:00"
            },
            {
                number: 3,
                type: "kommt",
                timestamp: "12:30:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "13:00:00"
            }
        ],
        workingtime: "06:30",
        workingminutes: "390",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 2,
        date: "02-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "06:00:00"
            },
            {
                number: 2,
                type: "geht",
                timestamp: "12:00:00"
            },
            {
                number: 3,
                type: "kommt",
                timestamp: "12:30:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "18:00:00"
            }
        ]
    },
    {
        emppsnr: 1,
        date: "03-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "06:15:00Z"
            },
            {
                number: 2,
                type: "geht",
                timestamp: "12:00:00"
            },
            {
                number: 3,
                type: "kommt",
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "13:00:00"
            }
        ],
        workingtime: "05:30",
        workingminutes: "330",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "04-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "06:00:00"
            },
            {
                number: 2,
                type: "geht",
                timestamp: "12:00:00"
            },
            {
                number: 3,
                type: "kommt",
                timestamp: "12:25:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "14:30:00"
            }
        ],
        workingtime: "08:05",
        workingminutes: "485",
        breaktime: "00:25",
        breakminutes: "25",
    },
    {
        emppsnr: 1,
        date: "05-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:15:00"
            },
            {
                number: 2,
                type: "geht",
                timestamp: "12:20:00"
            },
            {
                number: 3,
                type: "kommt",
                timestamp: "12:50:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "14:00:00"
            }
        ],
        workingtime: "06:15",
        workingminutes: "375",
        breaktime: "00:30",
        breakminutes: "30",
    }
]

const employeesArchive = [
    {
        psnr: 6,
        tag: null,
        username: 'MAYELI',
        firstname: 'Elias',
        lastname: 'Mayer',
        birthdate: "2003-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "mayer.elias@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 7,
        tag: null,
        username: 'MAYGAB',
        firstname: 'Gabriel',
        lastname: 'Mayer',
        birthdate: "2005-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "mayer.gabriel.dominik@gmail.com",
        createddate: null,
        editeddate: null
    },
    {
        psnr: 8,
        tag: null,
        username: 'MAYANN',
        firstname: 'Anna',
        lastname: 'Mayer',
        birthdate: "2009-01-01",
        street: "Sesamstraße",
        housenr: "1",
        residence: "Sesamdorf",
        postalcode: "4545",
        phonenr: "066012345678",
        email: "mayer.anna@gmail.com",
        createddate: null,
        editeddate: null
    }
]

module.exports = {
    users,
    employees,
    timerecords,
    transponders,
    employeesArchive
};