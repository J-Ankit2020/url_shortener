const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/url/:id', (req, res) => {
    // TODO: get a short url by id
})
app.get('/:id', (req, res) => {
    // TODO: redirct to url
    res.send({
        message: 'Hello World'
    });
});
app.post('/url', (req, res) => { })
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
})