const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
        res.end('<h1>hello</h1>')
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
        res.end('<h1>about page</h1>')
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'})
        res.end('<h1>page not found</h1>')
    }
})

server.listen('3000')