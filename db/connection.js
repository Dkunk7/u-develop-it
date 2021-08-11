const mysql = require(`mysql2`);

// Connect to database
const db = mysql.createConnection(
    {
        host: `localhost`,
        // Your MySQL username --> huh??
        user: `root`,
        // Your MySQL password
        password: `!Jrkffmndd12`,
        database: `election`
    },
);

module.exports = db;