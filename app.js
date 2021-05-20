// Import ketergantungan
const yargs = require("yargs");
const { saveContact, listContact, detailContact, deleteContact } = require('./contacts')

// Jika command adalah add (menambahkan data contact)
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
}).demandCommand()

// Jika command adalah list (menampilkan semua data contact)
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua data contact',
    handler() {
        listContact()
    }
})

// Jika command adalah detail (menampilkan detail sebuah contact berdasarkan nama)
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            demandOption: true,
            describe: 'Input Nama lengkap',
            type: 'string',
        },
    },
    handler({ nama }) {
        detailContact(nama)
    }
})

// Jika command adalah delete (menghapus sebuah contact berdasarkan nama)
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            demandOption: true,
            describe: 'Input Nama lengkap',
            type: 'string',
        },
    },
    handler({ nama }) {
        deleteContact(nama)
    }
})

yargs.parse()