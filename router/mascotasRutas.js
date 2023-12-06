const express = require('express')
const router = express.Router();

const mascota = require('../model/mascota');

router.get('/', async (req, res) => {

    try {
        const arrayMascotasDB = await mascota.find()
        // console.log(arrayMascotasDB);
        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const mascotaDB = new mascota(body);
        await mascotaDB.save();

        res.redirect('/mascotas')
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        const mascotaDB = await mascota.findOne({ _id: id })

        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log('error de lectura', error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const mascotaDB = await mascota.findByIdAndDelete({ _id: id })

        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'Eliminado!! Uooo!'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'No se pudo eliminar.... Upsss'
            })
        }

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
