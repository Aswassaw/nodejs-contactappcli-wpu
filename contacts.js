// Import ketergantungan
const fs = require('fs')
const readline = require('readline')

// Membuat readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// Membuat folder data jika belum ada
const dirPath = './data'
!fs.existsSync(dirPath) ? fs.mkdirSync(dirPath) : null

// Membuat file contacts jika belum ada
const dataPath = './data/contacts.json'
!fs.existsSync(dataPath) ? fs.writeFileSync(dataPath, '[]') : null

// Promise untuk pertanyaan
const pertanyaan = (description) => {
    return new Promise((resolve, reject) => {
        try {
            rl.question(description, data => resolve(data))
        } catch (error) {
            reject(error)
        }
    })
}

const saveContact = (nama, nohp, email) => {
    // Menyatukan semua data
    const contact = { nama, nohp, email }
    // Mengambil isi dari file contacts.json
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    // Memparse file string menjadi json
    const contacts = JSON.parse(file)
    // Menambahkan contact ke contacts
    contacts.push(contact)

    // Write file
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log('Data berhasil ditambahkan.')

    rl.close()
}

module.exports = { pertanyaan, saveContact }