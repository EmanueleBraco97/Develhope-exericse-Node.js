import { createServer } from "node:http";

const server = createServer((request, response) => {
    console.log('request received');
    
    response.setHeader('Content-Type', 'application/json');
})

server.listen(3000, () => {
    console.log('https://jsonplaceholder.typicode.com/posts/1/comments')
})


//The value of 'Content-Type' is : 'application/json'//