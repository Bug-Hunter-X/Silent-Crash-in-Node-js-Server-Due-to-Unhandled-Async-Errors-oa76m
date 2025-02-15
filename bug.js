const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Without proper error handling, this might cause the server to crash silently
    console.error('Error:', error);
    // The response is never sent
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an operation that might reject
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random failure condition
      if (Math.random() < 0.5) {
        reject(new Error('Simulated async operation failed'));
      } else {
        resolve();
      }
    }, 1000);
  });
}