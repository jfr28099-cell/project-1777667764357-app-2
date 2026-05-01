const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let todos = [{ id: 1, task: 'First Todo', completed: false }];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});