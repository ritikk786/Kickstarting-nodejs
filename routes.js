
const fs = require('fs')
const path = require('path')

const requenstHandler = (req,res)=>{

    res.setHeader('Content-Type','text/html')
    
    if(req.url==='/'){
        const pathname = path.join(__dirname,'message.txt')
        fs.readFile(pathname,{encoding:'utf-8'},(error,data)=>{
            if(error){
                console.log(error)
            }
        
    
                res.write('<html>')
                res.write('<head><title>this is node server</title></head>')
                res.write('<body>')
                res.write(`<h1>${data.toString()}</h1>`)
                res.write('<form method="POST" action="/message"> <input type="text" name="message"> <button type="submit">Submit</button> </form>')
                res.write('</body>')
                res.write('</html>')
                return res.end()
        })
        
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
}
// module.exports = requenstHandler;

module.exports={
    handler : requenstHandler,
    text : 'some text'
}

// module.exports.handler = requenstHandler;
// module.exports.text = 'some text';


// exports.handler = requenstHandler;
// exports.text = 'some text';