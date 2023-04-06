
// establish connection to database here

const db = require('../connection');

module.exports = {

    index(req, res) {

        db.query(`SELECT * FROM items`, (err, results ) => {

            
            if (err) return res.sendStatus(500);

            
        
            return res.send({items: results})

            

        });

    }, 

    store(req, res) {

        db.query(`INSERT INTO items (CATEGORY_ID, TITLE, DESCRIPTION, PRICE , QUANTITY, SKU) VALUES (?, ?, ?, ?, ?, ?) `, [req.body.entry.categoryID, req.body.entry.title, req.body.entry.description, req.body.entry.price, req.body.entry.quantity, req.body.entry.sku], (err, results ) => {

            console.log("result :", + JSON.stringify(results));
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM items `, (err, results) => {

                if (err) return res.sendStatus(500);
                return res.send({items:results});
            })


            


        });


    }, 


    update(req, res) {


        

        db.query(`UPDATE items SET CATEGORY_ID=?, TITLE=?, DESCRIPTION=?, PRICE=?, QUANTITY=?, SKU=? WHERE ID=?`, [req.body.data.entry.categoryID, req.body.data.entry.title, req.body.data.entry.description, req.body.data.entry.price, 
            req.body.data.entry.quantity, req.body.data.entry.sku], (err, results ) => {

            
            if (err) return res.sendStatus(500);
            

            db.query(`SELECT * FROM items `, (err, results) => {

                if (err) return res.sendStatus(500);

                return res.send({items:results});
            })

            


        });

    },


    destroy(req, res) {



        

        db.query(`DELETE FROM items WHERE ID =? `, [req.body.entry.ID], (err, results ) => {


            
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM items `, (err, results) => {

                if (err) return res.sendStatus(500);
                return res.send({items:results});
            })


        }); 

    }


};


