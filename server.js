const express = require('express');
const app = express();
app.use('/', require('./routes/admin'));
app.use('/', require('./routes/learner'));
app.use('/', require('./routes/coach'));

app.listen(5000);