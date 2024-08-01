import express from 'express';
import userRoutes from './controllers/users.controller'
import transactionRoutes from './controllers/transactions.controller'

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

app.use('/api/users', userRoutes)
app.use('/api/transactions', transactionRoutes)

app.listen(port, () => {
    console.log(`Listenning port ${port}`)
})