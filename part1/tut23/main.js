// --------------------------- nested destructuring---------------------------------------
const users = [
    {
        userid:1,
        firstName : 'ravi',
        gender :'male'

    },
    {
        userid:2,
        firstName : 'ranu',
        gender :'female'

    },
    {
        userid:3,
        firstName : 'shiv',
        gender :'male'

    },
]


// let [user1,user2,user3] = users
// console.log(user1)
// console.log(user2)
// console.log(user3)

// --------- get specific value of object
// let [{userid},{firstName},{gender}] = users
// console.log(userid)
// console.log(firstName)
// console.log(gender)

// --------- change varaible name
// let [{firstName:fname,userid},,{gender}] = users
// console.log(userid)
// console.log(fname)
// console.log(gender)


