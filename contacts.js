// Import ketergantungan
const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')

// Membuat folder data jika belum ada
const dirPath = './data'
!fs.existsSync(dirPath) ? fs.mkdirSync(dirPath) : null

// Membuat file contacts jika belum ada
const dataPath = './data/contacts.json'
!fs.existsSync(dataPath) ? fs.writeFileSync(dataPath, '[]') : null

const loadContact = () => {
    // Mengambil isi dari file contacts.json
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    // Memparse file string menjadi json
    return JSON.parse(file)
}

// Function untuk save contact
const saveContact = ({ nama, email, nohp }) => {
    // Menyatukan semua data
    const contact = { nama, email, nohp }
    // Load data
    const contacts = loadContact()

    // Cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)

    // Validasi nama (duplikat)
    if (duplikat) {
        console.log(chalk`{bgRed Nama {bold ${nama}} sudah terdaftar, harap gunakan nama lain!}`)
        return false
    }

    // Validasi email (valid)
    if (email) {
        // Jika email tidak sesuai format
        if (!validator.isEmail(email)) {
            console.log(chalk`{bgRed Email {bold ${email}} tidak valid, harap masukkan email yang valid!}`)
            return false
        }
    }

    // Validasi nohp (valid)
    if (!validator.isMobilePhone(nohp, 'id-ID')) {
        console.log(chalk`{bgRed Nohp {bold ${nohp}} tidak valid, harap masukkan nohp yang valid!}`)
        return false
    }

    // Menambahkan contact ke contacts
    contacts.push(contact)

    // Write file
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log(chalk.green('Data berhasil ditambahkan.'))
}

// Function untuk menampilkan semua data
const listContact = () => {
    const contacts = loadContact()
    console.log(chalk.blue.bold('Daftar Contact.'))

    contacts.forEach((contact, index) => {
        console.log(chalk`${index + 1}. {bold.green ${contact.nama}} - {yellow ${contact.nohp}} ${contact.email ? chalk`- {red ${contact.email}}` : ''}`)
    })
}

// Function untuk menampilkan detail sebuah data
const detailContact = (nama) => {
    const contacts = loadContact()

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if (contact) {
        console.log(chalk.blue.bold(`Detail Contact ${contact.nama}.`))
        console.log(chalk`1. {bold.green ${contact.nama}} - {yellow ${contact.nohp}} ${contact.email ? chalk`- {red ${contact.email}}` : ''}`)
    } else {
        console.log(chalk`{bgRed Contact {bold ${nama}} tidak ditemukan, silahkan coba lagi!}`)
    }
}

const deleteContact = (nama) => {
    const contacts = loadContact()

    // Menghapus data yang dipilih menggunakan filter
    const contactsAfterDelete = contacts.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase())

    if (contacts.length !== contactsAfterDelete.length) {
        // Write file
        fs.writeFileSync('data/contacts.json', JSON.stringify(contactsAfterDelete))

        console.log(chalk.green('Data tersebut berhasil dihapus.'))
    } else {
        console.log(chalk`{bgRed Contact tersebut tidak ditemukan, silahkan coba lagi!}`)
    }
}

module.exports = { saveContact, listContact, detailContact, deleteContact }