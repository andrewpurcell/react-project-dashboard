import express from 'express'

let app = express();
let api = express();

import projects from '../src/store/projects.js'

app.get('/', (req, res) => {
  res.json({ status: 'up' })
});

app.use('/api', api);

api.get('/projects', (req, res) => {
  res.json(projects);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
