
// establish connection to database here

const db = require('../connection');

module.exports = {

    index(req, res) {

        db.query(`SELECT * FROM items`, (err, results ) => {

            console.log(results);
            if (err) return res.sendStatus(500);

            console.log(results);
        
            return res.send({items: results})

            

        });

    }, 

    store(req, res) {

        db.query(`INSERT INTO items (CATEGORY_ID, TITLE, DESCRIPTION, PRICE , QUANTITY, SKU) VALUES (?, ?, ?, ?, ?, ?) `, [req.params.items.categoryID, req.params.items.title, req.params.items.description, req.params.items.price, req.params.items.quantity, req.params.items.sku], (err, results ) => {

            console.log("result :", + JSON.stringify(results));
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM items `, (err, results) => {

                if (err) return res.sendStatus(500);
                return res.send({items:results});
            })


            


        });


    }, 


    update(req, res) {

        db.query(`UPDATE items SET CATEGORY_ID=?, TITLE=?, DESCRIPTION=?, PRICE=?, QUANTITY=?, SKU=? WHERE ID=?`, [[req.params.items.categoryID, req.params.items.title, req.params.items.description, req.params.items.price, req.params.items.quantity, req.params.items.sku]], (err, results ) => {



            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM items `, (err, results) => {

                if (err) return res.sendStatus(500);
                return res.send({items:results});
            })

            


        });

    },


    destroy(req, res) {


        db.query(`DELETE FROM items WHERE ID =? `, [req.params.item.ID], (err, results ) => {


            
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM items `, (err, results) => {

                if (err) return res.sendStatus(500);
                return res.send({items:results});
            })


        }); 

    }


};


