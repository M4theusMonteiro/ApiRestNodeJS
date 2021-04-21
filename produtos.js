const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    Produto.find()
    .exec()
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(500).json({
            erro:err
        })
    });
    
});


//recuperando um unico produto
router.get('/produtoId', (req, res) => {
    const id = req.params.produtoId;
    if(id === 'unidesc'){
        res.status(200).json({
            message: 'produto encontrado',
            id: id
        });
    }
    else{
        res.status(400).json({
            message: 'produto não encontrado'
        })
    }
});

router.post('/', (req, res) => {

    const produto = new Produto({
            _id: new mongoose.Types.ObjectId(),
            nome: req.body.nome,
            preco: req.body.preco
    });

    produto.save()
    .then(result => {
        res.status(201).json({
            message:'POST Request para /produtos',
            produto: produto
         });
    })
    .catch( err => {
        res.status(500).json({
            error:err
        })
    });

    
});

router.put('/', (req, res, next)=>{
    id = await id.findOne();
    await id.updateOne();
    await id.save();
    id = await id.findOne();

});


router.delete('/', (req, res, next) => {
    produto.delete('/produtoId', (req, res) => {
        const id = req.params.produtoId;
             produto.findOneAndRemove(req.params.produtoId, req.body);
    });
});


module.exports = router;