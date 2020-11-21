const http = require("http");

//console.log(http)

http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"})

    switch (req.url) {
        case "/":
            res.end("Bienvenidos a nuestro sitio web")
            break;
            case "/productos":
                res.end("Nuestro productos")
                break
                case "/contacto":
                    res.end("Dejanos tu mensaje")
                    break
    
        default:
            res.end("Esta pagina no esta disponible")
            break;
    }
    res.end("Mi primer servidor en Node JS")

}).listen(3031,"localhost",()=>console.log("Servidor funcionando en el puerto 3031"))