const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', express.static('./dist'));
app.use('/sign-up', express.static('./dist'));
app.use('/change-password', express.static('./dist'));
app.use('/user-form', express.static('./dist'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
