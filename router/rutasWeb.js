const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index',{
        tituloDinamico:'Esto es un titulo que se agrega dinámicamente.',
        otroTituloDinamico:'Esto es un segundo título que se agrega dinámicamente.'
    })
})

router.get('/servicios', (req, res)=>{
    res.render('servicios',{
        tituloDinamicoPaginaServicios:'Título dinámico de la página de servicios'
        
    })
})

module.exports = router;
