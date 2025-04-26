const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
     user:'root',
     password:'',
     database:'datos_pruebas'
})

app.get('/', (re, res) => {
        return res.json("From Backend side ");
})

app.get('/datos', (req, res) => {
    const sql = "SELECT * FROM datos";
    db .query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
)

app.listen(8081, ()=>{
    console.log("listening on port 8081");
})