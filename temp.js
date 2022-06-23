
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const mysql = require('mysql2');
app.use(express.static('abc'));

app.get('getbookid',(req,resp)=>{
    console.log("ajax function called");

    const connection ={
        host: 'localhost',
        user: 'root',
        password: 'cdac',
        database: 'exam',
        port:3306
    }
    const conn =mysql.createConnection(connection);

    let result={status:false}
    let update=req.query.update;
    let bookid=req.query.bookid;
    console.log("update");
    connection.query('update price set bookid = ? , where update = ? ', [bookid, update], 
    (err, res1) => {
        if (err) {
           console.log(err);
			
        } else {
            if(res.affectedRows >0){
                result.status=true;
            }
            else{
                console.log("did not update");
            }
        }
        console.log(result);
        res.send(result);
			});


        });

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});