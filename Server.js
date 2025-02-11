const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/collatz' && parsedUrl.query.numero) {
        const numero = parseInt(parsedUrl.query.numero, 10);

        if (isNaN(numero) || numero <= 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Se requiere un número entero positivo.' }));
        }

        const secuencia = [];
        let n = numero;

        while (n !== 1) {
            secuencia.push(n);
            if (n % 2 === 0) {
                n = n / 2; 
            } else {
                n = 3 * n + 1; 
            }
        }
        secuencia.push(1); 

        // Parte de Jason
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(secuencia));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ruta no encontrada.' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});