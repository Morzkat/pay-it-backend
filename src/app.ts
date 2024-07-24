import express from 'express';
import userRoutes from './controllers/users.controller'

const app = express();
const port = 5200;

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.json({
        name: 'Pay it Api',
        version: '1.0.0'
    })
});

app.use('/api', userRoutes)

app.listen(port, () => {
    console.log(`Listenning port ${port}`)
})