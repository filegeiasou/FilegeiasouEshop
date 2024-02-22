const express = require('express');
const path = require('path');

app = express();

app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/view', require('./view'));
app.use('/users', require('./users'));


const PORT = process.env.PORT || 80;

app.listen(PORT , console.log(`Server started on port ${PORT}`));

