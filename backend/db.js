const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "sivakv@5244",
  host: "localhost",
  port: 5432,
  database: "CollegeDB"
});

pool.on("error", (error, client) => {
  console.log(error);
});

module.exports = {
  pool
};
