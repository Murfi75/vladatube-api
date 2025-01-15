const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log(req.url, req.method);
    res.render('index');
});

app.listen(3000, () => {
    console.log('Тестовый сервер запущен')
})