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

// Function untuk save contact
const saveContact = ({ nama, email, nohp}) => {
    // Menyatukan semua data
    const contact = { nama, email, nohp }
    // Mengambil isi dari file contacts.json
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    // Memparse file string menjadi json
    const contacts = JSON.parse(file)

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

module.exports = { saveContact }