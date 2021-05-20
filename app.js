// Import ketergantungan
const yargs = require("yargs");
const { saveContact } = require('./contacts')

// Jika command adalah add
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            demandOption: true,
            describe: 'Input Nama lengkap',
            type: 'string',
        },
        email: {
            demandOption: false,
            describe: 'Input Email',
            type: 'string',
        },
        nohp: {
            demandOption: true,
            describe: 'Input No HP',
            type: 'string',
        }
    },
    handler({ nama, email, nohp }) {
        saveContact({ nama, email, nohp })
    }
})

yargs.parse()