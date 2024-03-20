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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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
        date: "08-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "09-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "10-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 1,
        date: "11-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "12-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "15-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "16-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "17-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 1,
        date: "18-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "19-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "22-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "23-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "24-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 1,
        date: "25-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "26-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "29-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "30-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "31-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 2,
        date: "08-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "09-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 2,
        date: "10-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 2,
        date: "11-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "12-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "15-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "16-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 2,
        date: "17-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 2,
        date: "18-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "19-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "22-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "23-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 2,
        date: "24-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 2,
        date: "25-01-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "26-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "29-01-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "30-01-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 2,
        date: "31-01-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 2,
        date: "01-02-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "02-02-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 2,
        date: "05-02-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 2,
        date: "06-02-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "07-02-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "08-02-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "09-02-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },{
        emppsnr: 1,
        date: "01-03-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "04-03-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "05-03-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 1,
        date: "06-03-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "07-03-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "08-03-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "11-03-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "12-03-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 1,
        date: "13-03-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "14-03-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "15-03-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 1,
        date: "18-03-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 1,
        date: "19-03-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    },
    {
        emppsnr: 1,
        date: "20-03-2024",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: "07:00:00"
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "07:15",
        workingminutes: "435",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "01-03-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "16:00:00"
            }
        ],
        workingtime: "09:15",
        workingminutes: "555",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "04-03-2024",
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
                timestamp: "12:45:00"
            },
            {
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:15",
        workingminutes: "495",
        breaktime: "00:45",
        breakminutes: "45",
    },
    {
        emppsnr: 2,
        date: "05-03-2024",
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
                timestamp: "13:00:00",
                number: 4,
                type: "geht",
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:00",
        workingminutes: "480",
        breaktime: "01:00",
        breakminutes: "60",
    },
    {
        emppsnr: 2,
        date: "06-03-2024",
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
                timestamp: "15:00:00"
            }
        ],
        workingtime: "08:30",
        workingminutes: "510",
        breaktime: "00:30",
        breakminutes: "30",
    }
]

const employeesArchive = [
    {
        psnr: 6,
        tag: null,
        profilepicture: null,
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
        profilepicture: null,
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
        profilepicture: null,
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