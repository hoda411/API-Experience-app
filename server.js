const express = require('express');
const app = express();
app.use('/', require('./routes/admin'));
app.listen(9000);