// https://dashboard.ngrok.com/get-started/setup/nodejs

const http = require('http');
const ngrok = require('@ngrok/ngrok');

// Create webserver
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('Congrats you have created an ngrok web server');
}).listen(8080, () => console.log('Node.js web server at 8080 is running...'));

// Get your endpoint online
/* ngrok.connect({ addr: 8080, authtoken_from_env: true })
	.then(listener => console.log(`Ingress established at: ${listener.url()}`)); */

// use static domain configured in ngrok admin panel
// https://dashboard.ngrok.com/endpoints?sortBy=url&orderBy=asc
(async function () {
    const listener = await ngrok.forward({
        addr: 8080,
        authtoken_from_env: true,
        domain: "mayfly-amusing-equally.ngrok-free.app",
    });

    console.log(`Ingress established at: ${listener.url()}`);
})();

// need ngrok to run persistently
// https://dashboard.ngrok.com/endpoints?sortBy=url&orderBy=asc

