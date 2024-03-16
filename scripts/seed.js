const { users, employees, timerecords, transponders, employeesArchive } = require('../app/lib/data/placeholder-data.js');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');;

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error('seed---MONGODB_URI ist nicht definiert in .env');
}

async function seedUsers(client) {
    try {
        const insertedUsers = await Promise.all(
            users.map(async (user) => {

                const hashedPassword = await bcrypt.hash(user.password, 10);
                const databaseObj = client.db("kalki");
                const collectionObj = databaseObj.collection("users");

                const result = await collectionObj.insertOne({
                    username: user.username,
                    password: hashedPassword
                });
            }),
        );

        console.log(`seed---Seeded ${insertedUsers.length} users`);

        return {
            users: insertedUsers,
        };
    }
    catch (error) {
        console.error('seed---Fehler seeding users:', error);
        throw error;
    }
}

async function seedEmployees(client) {
    try {
        const insertedEmployees = await Promise.all(
            employees.map(async (employee) => {

                //const hashedPassword = await bcrypt.hash(employee.password, 10);

                const databaseObj = client.db("kalki");

                const collectionObj = databaseObj.collection("employees");

                const result = await collectionObj.insertOne({
                    psnr: employee.psnr,
                    tag: employee.tag,
                    profilepicture: employee.profilepicture,
                    username: employee.username,
                    firstname: employee.firstname,
                    lastname: employee.lastname,
                    //password: hashedPassword,
                    birthdate: employee.birthdate,
                    street: employee.street,
                    housenr: employee.housenr,
                    residence: employee.residence,
                    postalcode: employee.postalcode,
                    phonenr: employee.phonenr,
                    email: employee.email,
                    createddate: new Date,
                    editeddate: new Date,
                });
            }),
        );

        console.log(`seed---Seeded ${insertedEmployees.length} employees`);

        return {
            employees: insertedEmployees,
        };
    }
    catch (error) {
        console.error('seed---Fehler seeding employees:', error);
        throw error;
    }
}

async function seedEmployeesArchive(client) {
    try {
        const insertedEmployeesArchive = await Promise.all(
            employeesArchive.map(async (employeeArchive) => {

                const databaseObj = client.db("kalki");
                const collectionObj = databaseObj.collection("employeesArchive");

                const result = await collectionObj.insertOne({
                    psnr: employeeArchive.psnr,
                    tag: employeeArchive.tag,
                    profilepicture: employeeArchive.profilepicture,
                    username: employeeArchive.username,
                    firstname: employeeArchive.firstname,
                    lastname: employeeArchive.lastname,
                    birthdate: employeeArchive.birthdate,
                    street: employeeArchive.street,
                    housenr: employeeArchive.housenr,
                    residence: employeeArchive.residence,
                    postalcode: employeeArchive.postalcode,
                    phonenr: employeeArchive.phonenr,
                    email: employeeArchive.email,
                    createddate: new Date,
                    editeddate: new Date,
                });
            }),
        );

        console.log(`seed---Seeded ${insertedEmployeesArchive.length} employeesArchived`);

        return {
            employeesArchive: insertedEmployeesArchive,
        };
    }
    catch (error) {
        console.error('seed---Fehler seeding employeesArchived:', error);
        throw error;
    }
}

async function seedTransponders(client) {
    try {
        const insertedTransponders = await Promise.all(
            transponders.map(async (transponder) => {

                const databaseObj = client.db("kalki");
                const collectionObj = databaseObj.collection("transponders");

                const result = await collectionObj.insertOne({
                    uid: transponder.uid,
                    createddate: new Date,
                });
            }),
        );

        console.log(`seed---Seeded ${insertedTransponders.length} transponders`);

        return {
            transponders: insertedTransponders,
        };
    }
    catch (error) {
        console.error('seed---Fehler seeding unregisteredtags:', error);
        throw error;
    }
}

async function seedTimerecords(client) {
    try {
        const insertedTimerecords = await Promise.all(
            timerecords.map(async (timerecord) => {

                const databaseObj = client.db("kalki");
                const collectionObj = databaseObj.collection("timerecords");
                const result = await collectionObj.insertOne(timerecord);
            }),
        );

        console.log(`seed---Seeded ${insertedTimerecords.length} timerecords`);

        return {
            timerecords: insertedTimerecords,
        };
    }
    catch (error) {
        console.error('seed---Fehler seeding tiemrecords:', error);
        throw error;
    }
}

async function main() {

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('seed---Erfolgreich mit der Datenbank verbunden');
    } catch (error) {
        console.error('seed---Fehler beim Verbindungsaufbau zur Datenbank:', error);
    }

    await seedUsers(client);
    await seedEmployees(client);
    await seedEmployeesArchive(client);
    await seedTransponders(client);
    await seedTimerecords(client);

    try {
        await client.close();
        console.log('seed---Verbindung zur Datenbank erfolgreich geschlossen');
    }
    catch (error) {
        console.error('seed---Fehler beim Schließen der Datenbankverbindung:', error);
    }
}

main().catch((err) => {
    console.error(
        'seed---Ein Fehler ist aufgetreten beim seeden der Datenbank:',
        err,
    );
});
