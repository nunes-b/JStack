const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'admin',
  database: 'mycontacts'
});

client.connect()
  .then(() => console.log('🤝 Connected to the database 🤝'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
