var express = require("express")
var multer = require("multer")
var upload = multer({ dest: 'uploads/' })


var app = express()

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
        var resObject = new Object()
        resObject.size = req.file.size
        
        res.json(resObject)

})

app.use(express.static(__dirname + '/public'))

app.listen(8080)
