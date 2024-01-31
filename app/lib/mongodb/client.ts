import { MongoClient, Db, Collection, Document } from 'mongodb';

class DatabaseClient {
    private client: MongoClient;
    private database: Db | undefined;

    constructor() {
        const uri = process.env.MONGODB_URI;
        const dbName = process.env.MONGODB_DB;

        if (!uri) {
            throw new Error('MONGODB_URI ist nicht definiert in den environment Variablen');
        }

        if (!dbName) {
            throw new Error('MONGODB_DB ist nicht definiert in den environment Variablen');
        }

        this.client = new MongoClient(uri);
        this.database = undefined; // Initialize to undefined, as it will be set during connection
    }

    async connectToDatabase() {
        try {
            await this.client.connect();
            this.database = this.client.db(process.env.MONGODB_DB);
            console.log('client---Erfolgreich mit der Datenbank verbunden');
        } catch (error) {
            console.error('client---Fehler beim Verbindungsaufbau zur Datenbank:', error);
        }
    }

    async closeDatabaseConnection() {
        try {
            await this.client.close();
            console.log('client---Verbindung zur Datenbank erfolgreich geschlossen');
        } catch (error) {
            console.error('client---Fehler beim Schließen der Datenbankverbindung:', error);
        }
    }

    getDatabase(): Db {
        if (!this.database) {
            throw new Error('Database is not connected. Call connectToDatabase() first.');
        }
        return this.database;
    }

    getCollection(collectionName: string): Collection<Document> {
        const database = this.getDatabase();
        return database.collection(collectionName);
    }

    async find(collectionName: string, query: object): Promise<Document[]> {
        const collection = this.getCollection(collectionName);
        console.log('client---Suche nach ' + JSON.stringify(query));
        const result = await collection.find(query).toArray();
        return result;
    }
}

export default DatabaseClient;
