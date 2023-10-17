/*
    1. Membuat perhitungan matematika
    - luas lingkaran
    - luas segitiga
    - luas persegi pajang
    - luas jajargenjang

    2. menghitung total gaji yang didapat dalam 1 bulan dengan input minimal:
    - nama karyawan
    - gaji perhari
    - jumlah hari kerja
 */

// 1. luas lingkaran
const luasLingkaran = (r) => {
    const luas = 3.14 * r * r
    console.log(luas)
}
// 2. luas segitiga
const luasSegitiga = (a, t) => {
    const luas = 0.5 * a * t
    console.log(luas)
}
// 3. luas persegi panjang
const luasPersegiPanjang = (p, l) => {
    const luas = p * l
    console.log(luas)
}
// 4. luas jajargenjang
const luasJajagenjang = (a, t) => {
    const luas = a * t
    console.log(luas)
}
luasLingkaran(5)
luasSegitiga(10, 10)
luasPersegiPanjang(5, 5)
luasJajagenjang(5, 5)

// 2. menghitung total gaji yang didapat dalam 1 bulan dengan input minimal:
const namaKaryawan = prompt('Masukkan nama karyawan')
const gajiPerhari = prompt('Masukkan gaji perhari')
const jumlahHariKerja = prompt('Masukkan jumlah hari kerja')

// const hitungGaji = gajiPerhari * jumlahHariKerja
// const hitungGaji = function (gajiPerhari, jumlahHariKerja) {
//     return gajiPerhari * jumlahHariKerja
// }
const hitungGaji = (gajiPerhari, jumlahHariKerja) => {
    return gajiPerhari * jumlahHariKerja
}
alert(`Nama: ${namaKaryawan}, Gaji: ${hitungGaji(gajiPerhari, jumlahHariKerja)}`)