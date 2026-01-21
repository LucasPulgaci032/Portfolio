const { Router } = require ('express')
const { getCertifications,postCertifications } = require('../controllers/certification')
const router = Router()

router.get('/', getCertifications)
router.post('/',postCertifications)

module.exports = router