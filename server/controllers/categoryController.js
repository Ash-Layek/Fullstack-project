const db = require('../connection');



module.exports = {


    getID(req,res){



        db.query(`SELECT ID FROM categories`, (err, results) => {


            if (err) res.sendStatus(500);



            console.log(results);

            return res.send({items: results});
        })



    },


index(req, res) {


    db.query(`SELECT * FROM categories`, (err, results) => {


        if (err) return res.sendStatus(500);



        console.log(results);

        return res.send({items: results});

        
        
        
        
        
    });

},



destroy(req,res) {



    

    db.query(`DELETE FROM categories WHERE ID = ?`, [req.body.entry.ID], (err, results) => {



        if (err) return res.sendStatus(500);

        db.query(`SELECT * FROM categories`, (err, results) => {

            if (err) return res.sendStatus(500);

            return res.send({items: results});
        })



    });


},



store(req,res) {


    console.log(req.body.name);


    db.query(`INSERT INTO categories (NAME) VALUES (?)`, [req.body.name], (err, results) => {


        if (err) return res.sendStatus(500);

        db.query(`SELECT * FROM categories `, (err, results) => {

            if (err) return res.sendStatus(500);
            return res.send({items:results});
        })
        
    });
}








};