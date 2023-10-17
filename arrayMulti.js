/*
    Array dengan banyak dimensi
 */

const dataArray = [
    'Family',
    4,
    {father: 'Harisuddin', mother: 'Nafees'},
    ['Kaukab', 'Tusyfa'],
    {
        myFamily: function () {
        console.log('ini adalah keluarga kecil haris')
        },
    },
]
console.log(dataArray)
console.log(dataArray[3][1]) // mengambil data array multidimensi
dataArray[4].myFamily() // mengambil data array multidimensi dengan function

/*
    Merge array
 */

const array1 = ['Harisuddin', 'Nafees', 'Kaukab', 'Tusyfa'];
const array2 = ['Sudar', 'Siti'];
const mergeArray = array1.concat(array2); // merge menggunakan concat

// console.log(mergeArray)
// for (list in mergeArray) {
//     console.log(list)
// }
// mergeArray.map((value, index) => console.log(value, index))

const datas = [
    {
        name: 'Harisuddin',
        age: 27,
        role: 'Frontend Developer',
    },
    {
        name: 'Nafees',
        age: 26,
        role: 'Backend Developer',
    },
    {
        name: 'Kaukab',
        age: 4,
        role: 'UI/UX Designer',
    },
    {
        name: 'Tusyfa',
        age: 2,
        role: 'UI/UX Designer',
    }
]
// datas.map((value, index) => {
//    console.log(value)
// });

// datas.sort((a, b) => a.age - b.age).map((value, index) => console.log(value, index))
datas.filter((x) => x.age > 20).map((value) => console.log(value))