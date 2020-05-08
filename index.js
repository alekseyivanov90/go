const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
	res.end(`<div>
				 <h1>Glavnoi</h1>
				 <nav>
					<ul>
						<li>
							<a href="/">Glavnoi</a>
						</li>
						
						<li>
							<a href="/str">Stranica</a>
						</li>
					</ul>
				 </nav>
			 </div>
	<script src="/js.js"></script>`);
});

app.get('/str', (req, res) => {
	res.end(`index.html`);
})

app.listen(PORT, () => {
	console.log('Сервер работает');
})
