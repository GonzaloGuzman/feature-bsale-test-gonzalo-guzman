const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('select * from category c join product p on c.id = p.category', (err, rows)=>{
            if(err) return res.send(err)  
            res.json(rows)
        })
    })
})

routes.get('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query(`select * from category c join product p on c.id = p.category where c.id = ${req.params.id} order by p.id asc`, (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query(`select * from category c join product p on c.id = p.category where p.name like '%${req.body.name}%' order by p.id asc`, (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

module.exports = routes