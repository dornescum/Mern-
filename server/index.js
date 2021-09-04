import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();


// limita poze
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
// cors inaiante de routes pt a evita error
app.use(cors());
app.use('/posts', postRoutes);

// mongoose
const CONNECTION_URL = 'mongodb+srv://mernUser:ceapa_2000@thenetninja.ftnae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const CONNECTION_URL = 'mongodb+srv://ceapa20:ceapa_2000@thenetninja.ftnae.mongodb.net/mern?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
		.then(()=> app.listen(PORT, ()=>console.log(`Server running ${PORT}`)))
		.catch(err => console.log('problem'))
// mongoose.set('useFindAndModify', false);
// =========================