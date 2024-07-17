import express from 'express'

const app = express();
const port = 5200;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Listenning...');
});

app.listen(port, () => {
    console.log(`Listenning port ${port}`)
});