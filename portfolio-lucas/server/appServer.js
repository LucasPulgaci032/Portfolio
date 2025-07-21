const express = require('express')
const rotaCertification = require('./routes/certifications')
const PORT = 8000;

const app = express();
app.use(express.json())
app.use('/certifications', rotaCertification)



app.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
    
})