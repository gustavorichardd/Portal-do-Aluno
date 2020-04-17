process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const Sequelize = require('sequelize')
const pg = require('pg');
pg.defaults.ssl = true;


const sequelize = new Sequelize('db5bqbkrr0g7c8', 'zboxukhqszzvzq', '4aa5b438c06078713528d9056893a984cb1692ffe81fdfdb3f7aafb7582f165e', {
   host: 'ec2-52-71-231-180.compute-1.amazonaws.com',
   dialect: 'postgres',
   operatorAliases: true,
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});

module.exports = sequelize;

