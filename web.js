const express = require('express');
const app = express();

app.get('/*', function (req, res) {
    res.send(req.url + '로 접속하셨습니다!');
});

app.listen(80, function () {
    console.log('서버 시작되었습니다.');
});