const http = require('http');
const app = require('./app');

const server = http.createServer(app);

// Listen on PORT
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});