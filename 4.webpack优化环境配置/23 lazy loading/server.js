

const express = require('express')

const app = express()

app.use(express.static('build', {maxAge: 1000 * 3600}))

app.listen(5056, ()=>{
    console.log('server微服务已启动')
})