const createApp = require('./app.js');

const app = createApp();

app.listen(3000, () => {
    console.log(`server at running to http://localhost:3000`);
});

module.exports = app;