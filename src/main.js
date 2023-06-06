const app = require('./app/app');
const {SEVER_PORT} = require('./config/server');
require('./utils/error');

app.listen(SEVER_PORT, () => {
    console.log(`http://localhost:${SEVER_PORT}`)
})
