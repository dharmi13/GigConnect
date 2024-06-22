const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1314', // replace with your actual password
    database: 'postgres' // replace with your actual database name
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

const register = async (req, res) => {
    const { Fname, Lname, email, gender, password, username, country } = req.body;

    try {
        const query = `
            INSERT INTO freelancer.users(Fname, Lname, email, gender, password, username, country)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        const values = [Fname, Lname, email, gender, password, username, country];
        await client.query(query, values);
        console.log("done");
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'An error occurred while registering user' });
    }
};

const login = async (req,res) =>{
    const userquery = 'SELECT username,password FROM freelancer.users WHERE username = $1';
    try{
        console.log("try");
        const {username,password} = req.body
        const userresult = await client.query(userquery,[username]);
        const user = userresult.rows[0];
        if(!user) return res.status(404).json("User not found!");
        const iscorrect = await password == user.password;
        if(!iscorrect)  return res.status(401).json('Incorrect password!');
        console.log("done");    
        res.status(200).json({ message: 'Login successful', username: user.username });
        }catch(err){
            console.log("(: oops wrong!!")
        res.status(500).send("(: oops wrong!!")
    }
};

const logout = async(req,res)=>{
    try{
        console.log("try");
        res.status(200).json({message:"User has logged out!"});
    }catch(err){
        res.status(500).send("(::");
    }

};

module.exports = { register,login,logout };
