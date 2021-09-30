import knex from 'knex'


export const connection = knex({
    client:"mysql",
    connection: {
        host:'35.226.146.116',
        user:'2147365-guilherme-amaral',
        password:'NfTCtJoHs3@cS48V1MZ~',
        database:'lovelace-2147365-guilherme-amaral',
        port: 3306,
        multipleStatements: true
    }
})