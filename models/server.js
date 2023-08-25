
const express = require('express');
const cors    = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.paths = {
            users: '/api/users'
        }

        this.middlewares();

        this.routes();

    }

    middlewares(){

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.paths.users, require('../routes/user') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('server running on port: ', this.port);
        })
    }

}

module.exports = Server;




