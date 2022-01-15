const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'db.africalib.gabia.io',
    user: 'africalib',
    password: 'abc1234567!',
    connectionLimit: 5,
    database: 'dbafricalib'
});

module.exports = {
    async run(query, params) {
        return new Promise((resolve, reject) => {
            pool.getConnection()
                .then(conn => {
                    conn.query(query, params)
                        .then((rows) => {
                            resolve(rows);
                            conn.end(); // (필수) connection 종료
                        })
                        .catch(err => {
                            console.log(err);
                            conn.end(); // (필수) connection 종료
                            reject(err);
                        })

                }).catch(err => {
                    //not connected
                    console.log(err);
                    reject(err);
                });
        });
    }
}