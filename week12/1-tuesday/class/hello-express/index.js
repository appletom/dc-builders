const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const server = http.createServer(app);

const db = require('./db');

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/friends', (req, res) => {
    let htmlData = `<ul>`;
    for (let friend of db) {
        htmlData += `<li>
        <a href="${req.path}${friend.handle}">${friend.name}</a>
        </li>`;
    }
    htmlData += `</ul>`;
    res.send(htmlData);
});

app.get('/friends/:handle', (req, res) => {
    const {handle} = req.params;
    const friend = db.find(f => f.handle === handle);  //finds friend with the same handle in the url
    if (friend) {
        let htmlData = ``;
        htmlData += `<h1>NAME: ${friend.name}</h1>`;
        htmlData += `<h3>HANDLE: ${friend.handle}</h1>`;
        htmlData += `<h3>SKILL: ${friend.skill}</h1>`;
        res.send(htmlData);
    }
    else {
        res.status(404)
            .send(`no friend with handle ${handle}`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});