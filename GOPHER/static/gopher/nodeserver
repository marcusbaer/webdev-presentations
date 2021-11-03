const {
	GopherServer,
	StaticRouter,
	DynamicRouter,
	URLRouter,
} = require("gopher-server");
const path = require("path");

// Create the server
const app = new GopherServer();

// Use a URL router
app.use(new URLRouter());

// Use a static router
app.use(new StaticRouter(path.join(__dirname, "./static")));

app.use(
	new DynamicRouter("/searchintro", (request, params) => {
		request.send(`i	(NULL)	0
iS U C H E	(NULL)	0
i	(NULL)	0
iBitte geben Sie nun einen Begriff an, nach dem gesucht werden soll!	(NULL)	0
i	(NULL)	0
7Suchbegriff	/search	localhost	70`);
	})
);

app.use(
	new DynamicRouter("/search\t:search", (request, params) => {
		request.send(`iSuchergebnis für die Suche nach: ${params.search}	(NULL)	0
i	(NULL)	0
0Foo	/test/foo	localhost	70
0Bar	/test/bar	localhost	70
i	(NULL)	0
1Test	/test	localhost	70
1Über Gopher	/	localhost	70
`);
	})
);

app.use(
	new DynamicRouter("/test", (request, params) => {
		const time = new Date();
		request.send(`i	(NULL)	0
iT E S T	(NULL)	0
i	(NULL)	0
iDokument dynamisch gerendert am:	(NULL)	0
i${time}	(NULL)	0
i	(NULL)	0
0Foo	/test/foo	localhost	70
0Bar	/test/bar	localhost	70`);
	})
);

app.use(
	new DynamicRouter("/test/:id", (request, params) => {
		const headline = params.id.toUpperCase().split('').join(' ');
		request.send(`
${headline}

Das angeforderte Dokument enthält den Parameter ID=${params.id}.`);
	})
);

// Log all requests to the server
app.on("request", (request) => {
	// console.log(`${request.socket.remoteAddress} requested ${request.path}`);
});

// Start the server on port 70
app.listen(70, () => {
	console.log("Listening at gopher://localhost:70");
});