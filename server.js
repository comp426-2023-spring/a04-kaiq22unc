#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

const argv = minimist(process.argv.slice(2));
const app = express();
const port = process.env.PORT || 5000;


// Default endpoint for undefined routes
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// Check endpoint
app.get('/app', (req, res) => {
  res.status(200).send('200 OK');
});

app.get('app/rps', (req, res) => {
  res.status(200).json(rps());
}
app.get('app/rpsls', (req, res) => {
  res.status(200).json(rpsls());
}

app.get("/app/rps/play", (req,res) => {
    res.status(200).json(rps(req.query.shot));
});

app.get("/app/rpsls/play", (req,res) => {
    res.status(200).json(rpsls(req.query.shot));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
