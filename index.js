const http = require('http')
const fs = require('fs')
const path = require('path')


const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')


const express = require('express') // require express module
const app = express() // calls express function to start new Express app
app.use(express.static('public'))

app.listen(3000,()=>{
console.log("App listening on port 3000")
})

app.get('/',(req,res)=>{
   /* res.json({
    name: 'Greg Lim'
    })*/ // json response

    res.sendFile(path.resolve(__dirname,'index.html'))
    })

app.get('/about',(req,res)=>{ // called when request to /about comes in
        res.sendFile(path.resolve(__dirname,'about.html'))
        })

app.get('/contact',(req,res)=>{ //called when request to /contact comes
        res.sendFile(path.resolve(__dirname,'contact.html'))
        })
           



/*const server = http.createServer((req, res) =>{
if(req.url === '/about')
res.end(aboutPage)
else if(req.url === '/contact')
res.end(contactPage)
else if(req.url === '/')
res.end(homePage)
else {
res.writeHead(404)
res.end(notFoundPage)
}
})
server.listen(3000)*/