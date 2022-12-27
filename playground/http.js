const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.write('Hello world')
        res.end()
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([{name: 'Intro to Javascript', instructor: 'Rakib'}, {name: 'Intro to React', instructor: 'Rakib'}]))
        res.end()
    }
});

server.on('connection', (socket)=>{
    console.log('new client connected')
})

server.listen(3000)

console.log('listening on port 3000')

