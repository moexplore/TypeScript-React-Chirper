import * as mysql from 'mysql'

import Chirps from './chirps'

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirperapp',
    password: 'password',
    database: 'c14chirpr'
})

export const Query = (query: string, values?: Array<string | number>) =>{
    return new Promise<Array<any>>((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) return reject(err)
            return resolve(results)
        })
    })
}


export default {
    Chirps
}