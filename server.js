/**
 * project server.
 */
const express = require('express');
const app = express();
const PORT = 5000;

app.set('view engine', 'pug');
app.set('views', './public/view');
app.use('/styles', express.static(process.cwd() + '/public/styles/'))//accessing the styles file

app.get('/',(req, res) =>{
    res.render('index')
})
app.listen(PORT, () =>{
    console.log(`server is started at ${PORT}`)
})