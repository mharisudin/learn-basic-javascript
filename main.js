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

// let date = new Date().getDay()
// let day = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
// alert('Hari ini adalah hari ' +  day[date] + ' tanggal ' + new Date().getDate() + ' bulan ' + new Date().getMonth() + ' tahun ' + new Date().getFullYear())
// // loop
// for (let date = 0; date == day.length; date++) {
//     alert("Hari ini adalah hari : " + date);
// }

document.title = "MHarisuddin | Belajar Javascript"
console.log(document.title)

const body = document.body
// merubah body menggunakan append
// body.append("Hello World")

const h1 = document.createElement("h1")
// cara 1
// h1.textContent = "Hello World";
// cara 2
h1.innerHTML = "<marquee>Hello World!, Learn Javascript</marquee>"
//cara 3
// h1.innerText = "Hello World"
body.append(h1)

// Mengganti warna element
// id
const suscribe = document.getElementById('suscribe');
suscribe.style.background = 'cyan'
suscribe.style.borderStyle = 'solid'
suscribe.style.fontsize = '20px'
suscribe.style.padding = '10px'
suscribe.style.boxShadow = '0 0 5px black'
suscribe.style.textAlign = 'center'

const defaultText = 'Suscribe'
suscribe.textContent = defaultText


function ubahWarna() {
    // console.log('ubah warna')
    suscribe.style.background = 'red'
}
function ubahText() {
    // console.log('ubah text')
    suscribe.textContent = 'Tombolnya sudah di klik'
}
function oriText() {
    // console.log('ubah text')
    suscribe.textContent = defaultText
}

// button 2
    const btnFollow = document.getElementById('btnFollow');
    const defaultText2 = 'Follow'
    btnFollow.textContent = defaultText2

    btnFollow.style.background = 'cyan'
    btnFollow.style.borderStyle = 'solid'
    btnFollow.style.fontsize = '20px'
    btnFollow.style.padding = '10px'
    btnFollow.style.boxShadow = '0 0 5px black'
    btnFollow.style.textAlign = 'center'

// show text element when mouse over on button
const defaultParagraf = 'Hello World, My name is MHarisuddin'

function showText() {
    const text = document.createElement('p')
    text.textContent = defaultParagraf
    body.append(text)

    text.addEventListener('mouseout', changeColor)
}

function changeColor(){
    this.style.color = 'red'
}