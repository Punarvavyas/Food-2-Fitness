const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/project1/build/'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/project1/build/index.html'));
});

app.listen(process.env.PORT || 5000, function () {
    console.log('started');
});