// //Pour utiliser dotenv, on doit l'importer
// let dotenv = require("dotenv-flow");
// //Pour charger tous nos fichiers .env.*
// dotenv.config()
//Puisqu'on ne va plus utiliser la variable dotenv par la suite, on peut directement faire le .config sur l'import
//  /!\ Attention, la config de l'environnement devra toujours être faite au tout début du programme
require('dotenv-flow').config();

//console.log(process.env);
//On extrait de process.env, les variables d'environnement dont on aura besoin par la suite
const { MESSAGE, NODE_ENV, PORT } = process.env;
console.log( 'Lancé en', NODE_ENV, ' : ', MESSAGE);

//Création d'un serveur Express :
    //1) Toujours faire en premier : importer le module express et le stocker dans une variable
const express = require('express');

//On crée le serveur et on le stocke dans une variable
const router=require('./Routes');

const app = express();


//Mise en place d'une route temporaire
// app.get('/user', (req, res) => {
//     const data = {
//         msg : 'Coucou'
//     }
//     res.json(data);
// })

app.use('/api',router);

//On met le server sur "écoute" sur le port préciser dans la variable d'environnement PORT
app.listen(PORT, () => {
    console.log(`Server up on port:${PORT} [${NODE_ENV}]`);
})