const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1314",
    database: "postgres"
})

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    console.log('Is client connected?', client._connected);
    return client.query('SELECT version()');
  })


client.query('SELECT * FROM freelancer.user_registration;', (err,res)=>{
    if(!err)
        console.log(res.rows);
    else
       console.log(err.message);
    client.end;
})
