const users = [
    {
        username: 'KALELI',
        password: 'test123'
    },
    {
        username: 'KALCHR',
        password: 'test123'
    }
];

const employees = [
    {
        psnr: 1,
        tag: null,
        username: 'KALELI',
        firstname: 'Elias',
        lastname: 'Kalkhofer',
        password: '123456',
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
        username: 'KALGAB',
        firstname: 'Gabriel',
        lastname: 'Kalkhofer',
        password: '123456',
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
        username: 'KALANN',
        firstname: 'Anna',
        lastname: 'Kalkhofer',
        password: '123456',
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
        password: '123456',
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
        username: 'KALEVE',
        firstname: 'Evelyn',
        lastname: 'Kalkhofer',
        password: '123456',
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
        password: '123456',
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
        password: '123456',
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
        password: '123456',
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
        password: '123456',
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
        password: '123456',
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
        password: '123456',
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
        password: '123456',
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
        uid: "FF:FF:FF:FF:FF:FF:FA",
        erstelltAm: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FB",
        erstelltAm: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FC",
        erstelltAm: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FD",
        erstelltAm: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FE",
        erstelltAm: null
    },
    {
        uid: "FF:FF:FF:FF:FF:FF:FF",
        erstelltAm: null
    }
]

const timestamps = [
    {
        employeePerosnalnummer: 1,
        date: "2024-01-01",
        timestamps: [
            {
                type: "kommt",
                time: new Date("2024-01-01T05:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-01T12:00:00Z")
            },
            {
                type: "kommt",
                time: new Date("2024-01-01T13:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-01T18:00:00Z")
            }
        ]
    },
    {
        employeePerosnalnummer: 2,
        date: "2024-01-01",
        timestamps: [
            {
                type: "kommt",
                time: new Date("2024-01-01T06:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-01T12:30:00Z")
            },
            {
                type: "kommt",
                time: new Date("2024-01-01T13:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-01T16:00:00Z")
            }
        ]
    },
    {
        employeePerosnalnummer: 1,
        date: "2024-01-02",
        timestamps: [
            {
                type: "kommt",
                time: new Date("2024-01-02T05:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-02T12:00:00Z")
            },
            {
                type: "kommt",
                time: new Date("2024-01-02T13:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-02T18:00:00Z")
            }
        ]
    },
    {
        employeePerosnalnummer: 2,
        date: "2024-01-02",
        timestamps: [
            {
                type: "kommt",
                time: new Date("2024-01-02T06:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-02T12:30:00Z")
            },
            {
                type: "kommt",
                time: new Date("2024-01-02T13:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-02T16:00:00Z")
            }
        ]
    }
]

module.exports = {
    users,
    employees,
    timestamps,
    unregisteredtags
};