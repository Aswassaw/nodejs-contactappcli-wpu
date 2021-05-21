# NodeJS Contact App CLI WPU

## NodeJS Contact App CLI WPU?
NodeJS Contact App CLI WPU adalah Aplikasi Pengelolaan Contact berbasis CLI dari tutorial Web Programming Unpas.

## Cara penggunaan NodeJS Contact App CLI WPU
- Pastikan Nodejs dan NPM terinstall dengan benar.
- Jalankan `npm install`.
- Jalankan `node app --help` untuk melihat semua command yang tersedia. Aplikasi ini memiliki beberapa command, diantaranya:

  ### Add
  - Command: `node app add --nama='Andry Pebrianto' --email='andrypeb227@gmail.com' --nohp='085742536772'`.
  - Param: --nama (required, string), --email (optional, string), --nohp (required, string).
  - Desc: Command ini digunakan untuk menambahkan sebuah data pada contact. Ketiga param yang dimasukkan tidak harus dimasukkan secara urut.

  ### List
  - Command: `node app list`
  - Param: Tidak ada.
  - Desc: Command ini digunakan untuk menampilkan semua data yang ada.

  ### Detail
  - Command: `node app detail --nama='Andry Pebrianto'`.
  - Param: --nama (required, string).
  - Desc: Command ini digunakan untuk menampilkan sebuah data berdasarkan nama (tidak case sensitive).

  ### Delete
  - Command: `node app delete --nama='Andry Pebrianto'`.
  - Param: --nama (required, string).
  - Desc: Command ini digunakan untuk menghapus sebuah data berdasarkan nama (tidak case sensitive).
