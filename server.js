const express = require('express');
const app = express();
const port = 4500;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/tmp/poem', (req, res) => {
    const poem = `
        Roses are red,<br>
        Violets are blue,<br>
        Programming is fun,<br>
        And so are you.
    `;
    res.send(poem);
});

const quotes = [
    'Hasta la vista baby',
    'I am Mary Poppins yall',
    'I am in your walls',
    'Dude wtf',
    'Alcohol is gods apology for making us self aware'
];

app.get('/tmp/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(randomQuote);
});

app.post('/tmp/sum/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) + parseInt(b);
    if (isNaN(sum)) {
        res.status(400).send('Invalid input: a and b must be numbers.');
    } else {
        res.send(`The sum of ${a} and ${b} is ${sum}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

