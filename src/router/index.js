const fs = require('fs')

function registerRouters(app) {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') return
        const router = require(`./${file}`)
        app.use(`/${file.split('.')[0]}`, router)
    })
}

module.exports = registerRouters
