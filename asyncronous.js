const token = ~~(Math.random() * 123456789)
const pictures = ['cat.jpg', 'dog.jpg', 'fish.jpg']

// add parameter callback
function login(username, callback) {
    console.log('getting data user now..')
    setTimeout(() => {
    callback ({token, username})
    }, 3000)
}

function getUser(token, callback) {
    console.log('getting data apiKey now..')
    setTimeout(() => {
        callback ({apiKey: 'xapikey123'})
    }, 2000)
}

function getPicture(apiKey, callback) {
    console.log('getting data image now..')
    setTimeout(() => {
        callback ({pic: pictures})
    })
}

// this is nested callback
login('Haris', function (response) {
    const {token} = response
    getUser(token, function (response) {
        const {apiKey} = response
        console.log(apiKey)
        getPicture(apiKey, function (response) {
            const {pic} = response
            console.log(pic)
        })
    })
})



