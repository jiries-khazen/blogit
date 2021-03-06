const missingHandler = require('./missing');
const model = require('../src/models');

function submitHandler(request, response) {
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  });
  request.on('end', () => {
    const data = JSON.parse(body);
    model
      .createNewpost(data)
      .then(() => {
        response.writeHead(200);
        response.end(JSON.stringify('batata'));
      })
      .catch((error) => {
        console.log('submit error: ' + error);
        response.statusCode = 500;
        missingHandler(request, response);
      });
  });
}

module.exports = submitHandler;
