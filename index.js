const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public')); 

let PORT = process.env.PORT
if(PORT == null || PORT == ""){
    PORT = 4000;
}
//or const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("App listening...")
});