const http = require('http')
const fs = require('fs')
console.log(fs.readFileSync('message.txt').toString())
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')

    if(req.url==='/'){
    res.write('<html>')
    res.write('<head><title>this is node server</title></head>')
    res.write('<body>')
    res.write(`<h1>${fs.readFileSync('message.txt').toString()}</h1>`)
    res.write('<form method="POST" action="/message"> <input type="text" name="message"> <button type="submit">Submit</button> </form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
    }

    if(req.url==='/message' && req.method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk,18)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsbody = Buffer.concat(body).toString()
            const message = parsbody.split('=')[1].replace(/\+/g,' ')
            console.log(parsbody)
            fs.writeFileSync('message.txt',message)
        })
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end()
    }

    if(req.url==='/about'){
        res.write('<html>')
        res.write('<head><title>this is node server</title></head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        return res.end()
        }
        if(req.url==='/node'){
            res.write('<html>')
            res.write('<head><title>this is node server</title></head>')
            res.write('<body><h1>Welcome to my Node Js project</h1></body>')
            res.write('</html>')
            return res.end()
            }
})
server.listen(3000)
