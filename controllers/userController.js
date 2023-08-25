
const { response, request } = require('express');

const users = [
    {
        id: new Date().getTime(),
        name: 'Raul',
    },
    {
        id: new Date().getTime(),
        name: 'Carlos',
    },
];

const getUsers = ( req = request, res = response) => {
    try{

        res.json(users)

    }catch(error){
        res.status(400).json({
            message: 'Ocurrio un problema al obtener los usuarios',
            error
        })
    }
}

module.exports = {
    getUsers,
}