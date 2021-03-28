const express = require('express');

const handleRequest = (request, response) => {
  console.log(request.query);
  response.send('ok');
}

const app = express();

const PORT = 3000;

app.get('/', handleRequest);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

