var express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/vnroauth/index.html');
})

app.use(express.static(__dirname + '/dist/vnroauth'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server started on port: ${PORT}`));