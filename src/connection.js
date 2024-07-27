const config = {
    user: 'Nuevo',
    password: '1234567',
    server: 'LAPTOP-DRNASD59', 
    database: 'db_PrjItegral',
    options: {
        encrypt: false, // Usa SSL
        enableArithAbort: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

module.exports = config;
