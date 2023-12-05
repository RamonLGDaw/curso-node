const express = require('express')
const app = express()
require('dotenv').config()

const puerto = process.env.PORT || 3000;
const mongoose = require('mongoose');


//Conexion a base de datos

const uri = `mongodb+srv://${process.env.USUARI}:${process.env.PASSWORD}@cluster0.n1h1nz9.mongodb.net/${process.env.BDNAME}?retryWrites=true&w=majority`;


mongoose.connect(uri)
.then(() => console.log('Conectado CORRECTAMENTE a mongodb, FELICIDADES!!!!'))
    .catch(e => console.log('error de conexión', e))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//Deixo comentat per passar a les vistes dinàmiques
// app.get('/', (req, res)=>{
//     res.send('funciona??')
// })


//Rutas web
app.use('/', require('./router/rutasWeb'));
app.use('/mascotas', require('./router/mascotasRutas'));



//Cuando hay un use significa que estamos utilizando un middleware
app.use((req, res, next) => {
    res.status(404).render('404', { titulo: 'titulo de pagina de error 404, creada dinámicamente' })
})



app.listen(puerto, () => {
    console.log(`Servidor activo en el puerto: ${puerto}.`)
})
