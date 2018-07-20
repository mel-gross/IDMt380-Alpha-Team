//setting for server and db
var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//run the server
app.use(express.static("."));
app.listen(8080, function(){
    console.log("Server started for AURORA");
    console.log(process.cwd());
});

//endpoint for displaying coloring images
app.get('/display', function (req, res){
    //let db = new sqlite3.Database('./Desktop/db_testing/aurora_db.db');
    let db = new sqlite3.Database('../db/aurora_db.db');

    var sql = "SELECT * FROM 'COLORING_IMAGE'";

    db.all(sql, function(err, rows){
        if (err) {
            return err;
        }
        
        var coloring_img = "";
        rows.forEach(function(row){
            coloring_img = coloring_img + "<div class=\'coloring_img\' onclick=\'openImage(this)\'>" + row.IMAGE_SOURCE + "</div>";
        });
        res.send(coloring_img);
    });
    db.close();
});

//endpoint for displaying saved images
app.get('/saved', function (req, res){
    let db = new sqlite3.Database('./Desktop/db_testing/aurora_db.db');

    var sql = "SELECT * FROM 'SAVED_IMAGE'";

    db.all(sql, function(err, rows){
        if (err) {
            return err;
        }
        
        var saved_img = "";
        rows.forEach(function(row){
            //console.log(row.IMAGE_SOURCE);
            saved_img = saved_img + "<div class=\'saved_img\' onclick=\'openImage(this)\' name=\'" + row.IMAGE_ID +"\'>" + row.IMAGE_SOURCE + "</div>"
        });
        res.send(saved_img);
    });
    db.close();
});

//endpoint for saving colored image
app.post('/save', function (req, res){
    let db = new sqlite3.Database('./Desktop/db_testing/aurora_db.db');

    var imgSource = req.body.newSource;
    var imgID = parseInt(req.body.imageID);

    //check if it has been saved already or not
    //if yes, then update the existing data
    //if not, save as new
    var sql = "SELECT COUNT(*) FROM SAVED_IMAGE WHERE IMAGE_ID=" + imgID;
    db.all(sql, function(err, count){
        var alreadyExist = count.length;
        if(alreadyExist == 0) {
            sql = db.prepare('INSERT INTO SAVED_IMAGE (IMAGE_SOURCE)' 
                        + 'VALUES (?)'); 
            sql.run([imgSource], function(err){
                if(err){
                    res.send("Error: " + err.message);
                    console.log(err.message);
                    return err;
                }
                res.send("Successfully Saved!");
            });
            sql.finalize();
        }else{
            sql = db.prepare('UPDATE SAVED_IMAGE SET IMAGE_SOURCE = ? WHERE IMAGE_ID=' + imgID); 
            sql.run([imgSource], function(err){
                if(err){
                    res.send("Error: " + err.message);
                    console.log(err.message);
                    return err;
                }
                res.send("Successfully Saved!");
            });
            sql.finalize();
        }});

    db.close();
});