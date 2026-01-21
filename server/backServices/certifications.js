const fs = require('fs')

function getAllCertifications(){
    return JSON.parse(fs.readFileSync('certifications.json'))
}

function postCertification(certificadoNovo){
     const certificados = JSON.parse(fs.readFileSync('certifications.json',))

    const novaListaCertificados = [...certificados,certificadoNovo ] 

    fs.writeFileSync('certifications.json', JSON.stringify(novaListaCertificados))
}

module.exports = {
    getAllCertifications,
    postCertification
}