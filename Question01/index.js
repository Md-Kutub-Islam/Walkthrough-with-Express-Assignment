// Q.1 Bui:d a Server Using Http Modu:e Node<S with api endpoints for Getting Products Dat9
// " ‘/’ → send msg as “We:come to Men & Women Dummy Data”F
// " ‘/men’ → send 10 products data of menF
// " ‘/women’ → send 10 products data of wome;
// " ‘/other’ → send response as page not found

const { log } = require('console')
const http =  require('http')
const PORT = 5002
const HOSTNAME = 'localhost'

const men = [
    {
        id: "1",
        name: "Men's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "M",
        category: "Clothing"
    }
]

const women = [
    {
        id: "2",
        name: "Women's T-Shirt",
        brand: "ABC",
        price: 19.99,
        color: "Blue",
        size: "S",
        category: "Clothing"
    }
]

const server =  http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'Plain-Text')
        res.end('Welcome to Men & Women Dummy Data')
    }
    else if(req.url === '/men'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(men))
    }
    else if(req.url === '/women'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(women))
    }
    else{
        res.statusCode = 500
        res.setHeader('Content-Type', 'Plain-Text')
        res.end("Page not found")
    }
})

server.listen(PORT, () => {
    console.log(`Server is runing at ${HOSTNAME}:${PORT}`);
})