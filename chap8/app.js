// Dependencies
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// Controllers
import apiController from './controllers/api';

// Express Application
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mongoose Connection (blog is our database)
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true });

// Routes
app.use('/api', apiController);

// Listening port
app.listen(3000);