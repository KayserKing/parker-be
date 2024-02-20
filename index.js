const express = require('express')

const app = express()

app.use('/v1/api', routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})