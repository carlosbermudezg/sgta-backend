const app = require('./app');

const port = 3010
const server = async ()=>{
    app.listen(port)
    console.log('Server Running on port: ' + port)
}

server()