import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import Url from './models/url.model'

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json())


// db connection 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected")
    })
    .catch((err) => {
        console.log("DB connection failed", err)
    })


//routes
router.post('/shorten', async (req, res) => {
    const url = await Url.create({ full: req.body.full });
    res.json({ short: url.short });
});

router.get('/:short', async (req, res) => {
    const url = await Url.findOne({ short: req.params.short });
    if (url) return res.redirect(url.full);
    res.status(404).send('Not found');
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})