const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server'
});
client.set('visits', 0);

app.get('/', (req,res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visists is ' + visits);
        client.set('visits', parseInt(visits)+1)
    });
});

app.listen(8090, ()=> {
    console.log('Listening on port 8090')
});