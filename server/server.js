require('dotenv').config();
const express = require('express');
const app = express();
const listRoutes = require('./routes/listRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/lists', listRoutes);
app.use('/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});