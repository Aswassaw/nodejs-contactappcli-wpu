// Import ketergantungan
const { pertanyaan, saveContact } = require('./contacts')

// Fungsi utama
async function main() {
    try {
        // Mendapatkan semua data
        const nama = await pertanyaan('Masukkan nama anda: ')
        const nohp = await pertanyaan('Masukkan nohp anda: ')
        const email = await pertanyaan('Masukkan email anda: ')

        saveContact(nama, nohp, email)
    } catch (error) {
        console.log(error.message)

        rl.close()
    }
}

main()