const express = require('express');
const app = express()
const sequelize = require('./database/db');
const User = require('./database/models/User');

//settings
const PORT = process.env.PORT || 3000;

//Ruteo
app.get('/', (req, res) => {
    
    User.create({
        name: 'César Huerta Escalante',
        birthday: new Date(1992, 2, 15),
    }).then(user => {
        res.json(user);
    });
    
   User.findAll().then(user => {
       res.json(user);
   })
});

//Arranque
app.listen(PORT, () => {
    console.log(`La aplicacion esta lanzando el servidor en la siguiente direccion http://localhost:${PORT}`)
    sequelize.sync({ force: false }).then(() => {
        console.log('Nos hemos conectado a la base de datos sin peeeeeeeeedos');
    }).catch(error => {
        console.log('------------------------------Se ha producido un error------------------------------')
        console.log(error);
    })
})
