const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        age: 30
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        age: 25
    }
];
const getUsers = (cb)=>{
    cb(users);
};

const getUserByID = (id,cb)=>{
     const user = users.find(user => user.id == id); 
     cb(user);
};

exports.getUsers = getUsers;
exports.getUserByID = getUserByID;
