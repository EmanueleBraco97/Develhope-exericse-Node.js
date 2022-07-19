const figlet = require('figlet')

figlet('Hello World!!', function (error, data) {
    if (error) {
        console.log('Qualcosa è andato storto...');
        return;
    } console.log(data)
});