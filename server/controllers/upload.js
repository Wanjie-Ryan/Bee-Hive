const uploads = require('../models/upload')
const {StatusCodes} = require('http-status-codes')


const createupload = async(req, res)=>{

    res.send('ngolo')

}


const getalluploads = async(req, res)=>{

    res.send('kante')

}


const getsingleupload = async(req, res)=>{

    res.send('de bryune')
}

const updateupload = async(req, res)=>{

    res.send('Busquets')
}



const deleteupload = async(req, res)=>{

    res.send('de Jong')

}



module.exports = {createupload,getalluploads, getsingleupload, deleteupload, updateupload }

