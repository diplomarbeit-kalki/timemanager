const { users, employees, timestamps, unregisteredtags } = require('../app/lib/data/placeholder-data.js');
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

                const hashedPassword = await bcrypt.hash(employee.password, 10);

                const databaseObj = client.db("kalki");

                const collectionObj = databaseObj.collection("employees");

                const result = await collectionObj.insertOne({
                    psnr: employee.psnr,
                    tag: employee.tag,
                    username: employee.username,
                    firstname: employee.firstname,
                    lastname: employee.lastname,
                    password: hashedPassword,
                    birthdate: employee.birthdate,
                    street: employee.street,
                    housenr: employee.housenr,
                    residence: employee.residence,
                    postalcode: employee.postalcode,
                    phonenr: employee.phonenr,
                    email: employee.email,
                    erstelltAm: new Date,
                    bearbeitetAm: new Date,
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

async function seedUnregisteredtags(client) {
    try {
        const insertedUnregisteredtags = await Promise.all(
            unregisteredtags.map(async (unregisteredtag) => {

                const databaseObj = client.db("kalki");
                const collectionObj = databaseObj.collection("unregisteredtags");

                const result = await collectionObj.insertOne({
                    uid: unregisteredtag.uid,
                    erstelltAm: new Date,
                });
            }),
        );

        console.log(`seed---Seeded ${insertedUnregisteredtags.length} unregisteredtags`);

        return {
            unregisteredtags: insertedUnregisteredtags,
        };
    }
    catch (error) {
        console.error('seed---Fehler seeding unregisteredtags:', error);
        throw error;
    }
}

async function seedTimestamps(client) {
    try {
        const insertedTimestamps = await Promise.all(
            timestamps.map(async (timestamp) => {

                const databaseObj = client.db("kalki");
                const collectionObj = databaseObj.collection("timestamps");
                const result = await collectionObj.insertOne(timestamp);
            }),
        );

        console.log(`seed---Seeded ${insertedTimestamps.length} timestamps`);

        return {
            timestamps: insertedTimestamps,
        };
    }
    catch (error) {
        console.error('seed---Fehler seeding employees:', error);
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

    //await seedUsers(client);
    //await seedEmployees(client);
    await seedUnregisteredtags(client);
    //await seedTimestamps(client);
    
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
