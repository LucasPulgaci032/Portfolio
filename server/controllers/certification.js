const { getAllCertifications, postCertification} = require('../backServices/certifications')

function getCertifications(req, res){
    try{
        const certificados = getAllCertifications()
        res.send(certificados)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postCertifications(req,res){
    try{
        const novoCertificado = req.body
        if(req.body.nome){
            postCertification(novoCertificado)
        }else{
            res.status(422)
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getCertifications,
    postCertifications
}