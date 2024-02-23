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
        tag: "FF:FF:FF:FF:FF:FF:FA",
        profilepicture: '/profilepictures/1_Elias_Kalkhofer.jpg',
        username: 'KALELI',
        firstname: 'Elias',
        lastname: 'Kalkhofer',
        birthdate: "01.01.2003",
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
        birthdate: "01.01.2005",
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
        birthdate: "01.01.2009",
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
        birthdate: "01.01.1979",
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
        birthdate: "01.01.1981",
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
        psnr: 6,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "01.01.2000",
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
        psnr: 7,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "01.01.2000",
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
        psnr: 8,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "01.01.2000",
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
        psnr: 9,
        tag: null,
        username: 'TESVOR',
        firstname: 'Vorname',
        lastname: 'Nachname',
        birthdate: "01.01.2000",
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
        birthdate: "01.01.2000",
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
        birthdate: "01.01.2000",
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
        birthdate: "01.01.2000",
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

const unregisteredtags = [
    {
        uid: "FF:FF:FF:FF:FF:FF:FB",
        createddate: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FC",
        createddate: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FD",
        createddate: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FE",
        createddate: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FF",
        createddate: null
    }
]

const timerecords = [
    {
        emppsnr: 1,
        date: "2024-01-01",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: new Date("2024-01-01T05:00:00Z")
            },
            {
                number: 2,
                type: "geht",
                timestamp: new Date("2024-01-01T12:00:00Z")
            },
            {
                number: 3,
                type: "kommt",
                timestamp: new Date("2024-01-01T13:00:00Z")
            },
            {
                number: 4,
                type: "geht",
                timestamp: new Date("2024-01-01T18:00:00Z")
            }
        ]
    },
    {
        emppsnr: 2,
        date: "2024-01-01",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: new Date("2024-01-01T05:00:00Z")
            },
            {
                number: 2,
                type: "geht",
                timestamp: new Date("2024-01-01T12:00:00Z")
            },
            {
                number: 3,
                type: "kommt",
                timestamp: new Date("2024-01-01T13:00:00Z")
            },
            {
                number: 4,
                type: "geht",
                timestamp: new Date("2024-01-01T18:00:00Z")
            }
        ]
    },
    {
        emppsnr: 1,
        date: "2024-01-02",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: new Date("2024-01-02T05:00:00Z")
            },
            {
                number: 2,
                type: "geht",
                timestamp: new Date("2024-01-02T12:00:00Z")
            },
            {
                number: 3,
                type: "kommt",
                timestamp: new Date("2024-01-02T13:00:00Z")
            },
            {
                number: 4,
                type: "geht",
                timestamp: new Date("2024-01-02T18:00:00Z")
            }
        ]
    },
    {
        emppsnr: 2,
        date: "2024-01-02",
        stamps: [
            {
                number: 1,
                type: "kommt",
                timestamp: new Date("2024-01-02T05:00:00Z")
            },
            {
                number: 2,
                type: "geht",
                timestamp: new Date("2024-01-02T12:00:00Z")
            },
            {
                number: 3,
                type: "kommt",
                timestamp: new Date("2024-01-02T13:00:00Z")
            },
            {
                number: 4,
                type: "geht",
                timestamp: new Date("2024-01-02T18:00:00Z")
            }
        ]
    }
]

module.exports = {
    users,
    employees,
    timerecords,
    unregisteredtags
};