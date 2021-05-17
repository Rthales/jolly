require("dotenv").config()
module.exports = {
  development: {
    username: "dev",
    password: "Hmdg8tCP7c3yj5jwuCmwZB8H",
    database: "jolly_dev",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "test",
    password: "bGgMCxWpcLR6fzvJpKNvPXQc",
    database: "jolly_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  preparing: {
    username: "prep",
    password: "EeQwaGZWpBWtcz8UE6YhRH46",
    database: "jolly_preparing",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "prod",
    password: "27vaCsPVsyfcTdbsPfHr8eYX",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
}
