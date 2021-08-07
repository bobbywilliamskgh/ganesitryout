const knex = require("knex");

// Development
exports.db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "bobbywilliamskgh",
    password: "Lambogini123",
    database: "ganesitryout",
  },
});
