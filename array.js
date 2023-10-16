/*
    Learn about array
 */
const dataArray = ['Harisuddin', 'Nafees', 'Kaukab', 'Tusyfa']; // data array
const isArray = dataArray.includes('Nafees') // cek apakah data array ada atau tidak

if (isArray) {
    const posisiArray = dataArray.indexOf('Nafees') // cek posisi data array
    const father = posisiArray - 1 // cek data array sebelum posisi array
    const lastChild = posisiArray + 1 // cek data
    const family = dataArray[father]; // mengambil data array sebelum posisi array
    const child = dataArray[lastChild]; // mengambil data array setelah posisi array
    const arrayFirst = dataArray.shift() // cek data array pertama
    const arrayLast = dataArray.pop() // cek data array terakhir

    console.log(arrayFirst)
    console.log(arrayLast)
    console.log(`Data Array ${family}, adalah suami dari ${dataArray[posisiArray]}`)
    console.log(`Data Array ${child}, adalah anak dari ${family}`)
    console.log(`Data Array ${dataArray[posisiArray]} ditemukan pada posisi ${posisiArray}`) //
}else {
    console.log('Data tidak ditemukan')
}
// console.log(isArray);
// console.log(dataArray);