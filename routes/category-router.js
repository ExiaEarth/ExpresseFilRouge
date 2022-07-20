const express=require('express');
const categoryRouter= express.Router();

// const categoryRouter=require('express').Router()


// categoryRouter.get('/',(req,res)=>{
//     console.log("Liste de toutes le catégories");
//     res.sendStatus(501)
// })
// categoryRouter.get('/:id',(req,res)=>{
//     console.log(`récupération de la catégorie dont l'id est:${req.params.id}`);
//     res.sendStatus(501)
// })
// categoryRouter.get('/',(req,res)=>{
//     console.log(`Envoi d'une nouvelle catégorie`);
//     res.sendStatus(501)
// })
// categoryRouter.get('/:id',(req,res)=>{
//     console.log(`modification de la catégorie dont l'id est : ${req.params.id}`);
//     res.sendStatus(501)
// })
// categoryRouter.get('/:id',(req,res)=>{
//     console.log(`supprésion de la catégorie dont l'id est:${req.params.id}`);
//     res.sendStatus(501)
// })
////////////////////////////////////////////////////////////////////////////////////

categoryRouter.route('/')
    .get((req,res)=>{res.sendStatus(501);})
    .post((req,res)=>{res.sendStatus(501);})
categoryRouter.route('/:id')
.get((req,res)=>{res.sendStatus(501);})
.post((req,res)=>{res.sendStatus(501);})
.delete((req,res)=>{res.sendStatus(501);})




module.exports=categoryRouter;