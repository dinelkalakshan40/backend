const app = require ('./app');
const port = 3001;
const host = '127.0.0.1';

const server = app.listen(port, host, (err) => {
    if (err) {
      console.error(`Error starting server: ${err}`);
    } else {
      console.log(`Server is running on http://${host}:${port}`);
    }
  });