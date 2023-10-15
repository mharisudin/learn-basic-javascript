// TUGAS KECIL
/*
1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
 */

// let saldoAwal = prompt("Masukkan saldo awal anda : ");
// let saldoKedua = prompt("Masukkan saldo kedua anda : ");
// let saldoAkhir = parseInt(saldoAwal) + parseInt(saldoKedua);
//
// alert("Saldo akhir anda adalah : Rp. " + saldoAkhir);

let date = new Date().getDay()
let day = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
alert('Hari ini adalah hari ' +  day[date] + ' tanggal ' + new Date().getDate() + ' bulan ' + new Date().getMonth() + ' tahun ' + new Date().getFullYear())
// // loop
// for (let date = 0; date == day.length; date++) {
//     alert("Hari ini adalah hari : " + date);
// }
