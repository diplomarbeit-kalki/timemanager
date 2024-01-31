const users = [
    {
        username: 'KALELI',
        password: '123456'
    },
    {
        username: 'KALCHR',
        password: '123456'
    }
];

const employees = [
    {
        psnr: 1,
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

const timestamps = [
    {
        employeePerosnalnummer: 1,
        date: "2024-01-27",
        timestamps: [
            {
                type: "kommt",
                time: new Date("2024-01-27T05:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-27T12:00:00Z")
            },
            {
                type: "kommt",
                time: new Date("2024-01-27T13:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-27T18:00:00Z")
            }
        ]
    },
    {
        employeePerosnalnummer: 2,
        date: "2024-01-27",
        timestamps: [
            {
                type: "kommt",
                time: new Date("2024-01-27T06:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-27T12:30:00Z")
            },
            {
                type: "kommt",
                time: new Date("2024-01-27T13:00:00Z")
            },
            {
                type: "geht",
                time: new Date("2024-01-27T16:00:00Z")
            }
        ]
    }
]

module.exports = {
    users,
    employees,
    timestamps
};