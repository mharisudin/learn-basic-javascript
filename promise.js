const token = ~~(Math.random() * 123456789)
const pictures = ['cat.jpg', 'dog.jpg', 'fish.jpg']

// add parameter callback
function login(username) {
    console.log('getting data user token now..')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username !== 'haris') failed('username salah')
            success({token})
        }, 3000)
    })
}

function getUser(token) {
    console.log('getting data apiKey now..')
    return new Promise((success, failed) => {
        if (!token) failed('sorry, no token. Cannot Access')
        setTimeout(() => {
            success({apiKey: 'xapikey123'})
        }, 2000)
    })
}

function getPicture(apiKey) {
    console.log('getting data image now..')
    return new Promise((success, failed) => {
        if (!apiKey) failed('sorry, no apiKey. Cannot Access')
        setTimeout(() => {
            success({pic: pictures})
        }, 2000)
    })

}

async function getUserDisplay() {
    try {
        // const user = await login('haris') // await hanya bisa digunakan di dalam async function
        const {token} = await login('haris') // dipersingkat
        const {apiKey} = await getUser()
        const {pic} = await getPicture(apiKey)

        console.log(`
        token anda adalah ${token}
        apiKey anda adalah ${apiKey}
        pic anda adalah ${pic}
        `)
    } catch (err) {
        console.log(err)
    }
}

getUserDisplay()

// user.then(function (response) {
//     // console.log(response)
//     const {token} = response
//     console.log(token)
//     getUser(token).then(function (response) {
//         const {apiKey} = response
//         console.log(apiKey)
//         getPicture(apiKey).then(function (response) {
//             const {pic} = response
//             console.log(pic)
//         })
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err))



