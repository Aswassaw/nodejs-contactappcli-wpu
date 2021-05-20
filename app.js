const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// Membuat folder data jika belum ada
const dirPath = './data';
!fs.existsSync(dirPath) ? fs.mkdirSync(dirPath) : console.log('Direktori ditemukan.');

// Membuat file contacts jika belum ada
const dataPath = './data/contacts.json';
!fs.existsSync(dataPath) ? fs.writeFileSync(dataPath, '[]') : console.log('Data ditemukan.');

// Promise untuk pertanyaan
const pertanyaan = (description) => {
    return new Promise((resolve, reject) => {
        rl.question(description, data => resolve(data));
    })
}

// Fungsi utama
async function main() {
    try {
        // Mendapatkan semua data
        const nama = await pertanyaan('Masukkan nama anda: ');
        const nohp = await pertanyaan('Masukkan nohp anda: ');
        const email = await pertanyaan('Masukkan email anda: ');

        // Menyatukan semua data
        const contact = { nama, nohp, email };
        // Mengambil isi dari file contacts.json
        const file = fs.readFileSync('data/contacts.json', 'utf-8')
        // Memparse file string menjadi json
        const contacts = JSON.parse(file);
        // Menambahkan contact ke contacts
        contacts.push(contact);

        // Write file
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('Data berhasil ditambahkan.')

        rl.close();
    } catch (error) {
        console.log(error.message);
    }
}

main();