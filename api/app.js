import express from 'express'
import cors from 'cors'

let app = express();
let api = express();

import projects from '../src/store/projects.js'

app.use(cors());

app.get('/', (req, res) => {
  res.json({ status: 'up' })
});

app.use('/api', api);

api.get('/projects', (req, res) => {
  res.json(projects);
});

api.get('/users', (req, res) => {
  res.json([
    'Scott', 'Jimbo', 'Larry'
  ]);
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
